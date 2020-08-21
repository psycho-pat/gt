const util = require("util");
const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require("fs").promises;
const readline = require("readline");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const TOKEN_PATH = "token.json";

async function authorize(credentials) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  try {
    const token = await fs.readFile(TOKEN_PATH);
    oAuth2Client.setCredentials(JSON.parse(token));
    return oAuth2Client;
  } catch (err) {
    return await getNewToken(oAuth2Client);
  }
}

async function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const code = await new Promise(resolve =>
    rl.question("Enter the code from that page here: ", resolve)
  );
  console.log(code);
  rl.close();
  try {
    const token = await util
      .promisify(oAuth2Client.getToken)
      .call(oAuth2Client, code);
    oAuth2Client.setCredentials(token);
    await fs.writeFile(TOKEN_PATH, JSON.stringify(token));
    console.log("Token stored to", TOKEN_PATH);
    return oAuth2Client;
  } catch (err) {
    return console.error("Error while trying to retrieve access token", err);
  }
}

async function listMajors(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  try {
    let res = await util
      .promisify(sheets.spreadsheets.values.get)
      .call(sheets.spreadsheets.values, {
        spreadsheetId: "1VKmPW7Bcw_rnBLHkZRMN9tISPBlAYCLBXSpkPLbnuik",
        range: "Overview!A1:R28",
      });
    return res.data.values;
  } catch (err) {
    return console.log("The API returned an error: " + err);
  }
}

async function run() {
  try {
    const content = await fs.readFile("credentials.json");
    const client = await authorize(JSON.parse(content));
    const app = express();
    const port = 8888;
    const apiProxy = createProxyMiddleware('http://localhost:8080/');

    app.get("/update", async (_, res) => {
      const list = await listMajors(client);
      res.json(list);
    });
    app.use("/", apiProxy);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log("Error loading client secret file:", err);
  }
}

run().then(() => console.log("done"));
/*
 */
