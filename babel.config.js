module.exports = {
  presets:[
      "@babel/preset-env", //this was here before preact
      "@babel/preset-react" //this was here before preact
  ],
  //this is the new preact bit
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
    "runtime": "automatic",
    "importSource": "preact"
  }]
  ]
}