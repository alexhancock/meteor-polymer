Package.describe({
  summary: "Polymer is a new type of library for the web, built on top of Web Components, and designed to leverage the evolving web platform on modern browsers."
});

Package.on_use(function (api, where) {
  api.add_files('polymer.js', ['client']);
});

