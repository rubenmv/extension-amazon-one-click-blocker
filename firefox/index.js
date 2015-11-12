var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var ss = require("sdk/simple-storage");
var pf = require("sdk/simple-prefs");

pageMod.PageMod({
  include: ["http://www.amazon.*", "https://www.amazon.*"],
  contentStyleFile: [data.url("content.css")],
  contentScriptFile: [data.url("content.js")],
  onAttach: function (worker) {
    // Content script asks for password
    worker.port.on("loadPassword", function () {
      worker.port.emit("retrievePassword", pf.prefs.password);
    });
  }
});

/*pf.on("password", function () {
  //worker.port.emit("retrievePassword", prefs['password']);
});*/

