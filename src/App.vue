<template>
  <router-view />
</template>

<style>
body,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.5vh;
  height: 100vh;
  font-family: "Fira Sans";
}
#nav {
  padding: 2em;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: green;
}
@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-Hair.eot");
  src: local("Fira Sans Hair"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-Hair.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-Hair.woff") format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-Hair.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-HairItalic.eot");
  src: local("Fira Sans Hair Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-HairItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-HairItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-HairItalic.ttf")
      format("truetype");
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-UltraLight.eot");
  src: local("Fira Sans UltraLight"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-UltraLight.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-UltraLight.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-UltraLight.ttf")
      format("truetype");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-UltraLightItalic.eot");
  src: local("Fira Sans UltraLight Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-UltraLightItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-UltraLightItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-UltraLightItalic.ttf")
      format("truetype");
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-Light.eot");
  src: local("Fira Sans Light"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-Light.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-Light.woff") format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-Light.ttf")
      format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-LightItalic.eot");
  src: local("Fira Sans Light Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-LightItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-LightItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-LightItalic.ttf")
      format("truetype");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-Regular.eot");
  src: local("Fira Sans Regular"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-Regular.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-Regular.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-Regular.ttf")
      format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-Italic.eot");
  src: local("Fira Sans Regular Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-Italic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-Italic.woff") format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-Italic.ttf")
      format("truetype");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-Medium.eot");
  src: local("Fira Sans Medium"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-Medium.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-Medium.woff") format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-Medium.ttf")
      format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-MediumItalic.eot");
  src: local("Fira Sans Medium Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-MediumItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-MediumItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-MediumItalic.ttf")
      format("truetype");
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-SemiBold.eot");
  src: local("Fira Sans SemiBold"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-SemiBold.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-SemiBold.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-SemiBold.ttf")
      format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-SemiBoldItalic.eot");
  src: local("Fira Sans SemiBold Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-SemiBoldItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-SemiBoldItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-SemiBoldItalic.ttf")
      format("truetype");
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-Bold.eot");
  src: local("Fira Sans Bold"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-Bold.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-Bold.woff") format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-BoldItalic.eot");
  src: local("Fira Sans Bold Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-BoldItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-BoldItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-BoldItalic.ttf")
      format("truetype");
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-ExtraBold.eot");
  src: local("Fira Sans ExtraBold"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-ExtraBold.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-ExtraBold.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-ExtraBold.ttf")
      format("truetype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-ExtraBoldItalic.eot");
  src: local("Fira Sans ExtraBold Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-ExtraBoldItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-ExtraBoldItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-ExtraBoldItalic.ttf")
      format("truetype");
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-Heavy.eot");
  src: local("Fira Sans Heavy"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-Heavy.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-Heavy.woff") format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-Heavy.ttf")
      format("truetype");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src: url("https://code.cdn.mozilla.net/eot/FiraSans-HeavyItalic.eot");
  src: local("Fira Sans Heavy Italic"),
    url("https://code.cdn.mozilla.net/eot/FiraSans-HeavyItalic.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraSans-HeavyItalic.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraSans-HeavyItalic.ttf")
      format("truetype");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "Fira Mono";
  src: url("https://code.cdn.mozilla.net/eot/FiraMono-Regular.eot");
  src: local("Fira Mono"),
    url("https://code.cdn.mozilla.net/eot/FiraMono-Regular.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraMono-Regular.woff")
      format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraMono-Regular.ttf")
      format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Fira Mono";
  src: url("https://code.cdn.mozilla.net/eot/FiraMono-Bold.eot");
  src: local("Fira Mono Bold"),
    url("https://code.cdn.mozilla.net/eot/FiraMono-Bold.eot")
      format("embedded-opentype"),
    url("https://code.cdn.mozilla.net/woff/FiraMono-Bold.woff") format("woff"),
    url("https://code.cdn.mozilla.net/ttf/FiraMono-Bold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}
</style>
