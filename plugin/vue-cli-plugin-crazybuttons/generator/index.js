module.exports = function (api, options) {
  const { preset } = options;
  api.extendPackage({
    dependencies: {
      vuetensils: "0.8.0",
    },
  });
  api.render("./templates", {
    preset,
  });
};
