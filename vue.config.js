//vue.config.js

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        "appId": "com.JoshuaManuel.biblio",
        "icon": "./verified.icns",
        "directories": {
            "buildResources": "./build"
        },
        "mac": {
            "category": "public.app-category.developer-tools"
        }
      }
    }
  }
}
