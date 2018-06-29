// next.config.js
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/developer": { page: "/developer" },
      "/mapbox-studio": { page: "/mapbox-studio" },
      "/data-editor": { page: "/data-editor" },
      "/navigation-sdk": { page: "/navigation-sdk" },
      "/data-driven-styling": { page: "/data-driven-styling" },
      "/about": { page: "/about" }
    };
  }
};
