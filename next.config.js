// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/mapbox-studio": { page: "/mapbox-studio" },
      "/data-editor": { page: "/data-editor" }
    }
  },
}