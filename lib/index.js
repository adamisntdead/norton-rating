var XRay = require("x-ray");

var BASE_URL = "https://safeweb.norton.com/report/show?url=";

var x = XRay();

module.exports = function getRating(url, callback) {
  var scrape = x(BASE_URL + encodeURIComponent(url), ".big_clip@alt");
  scrape(function(err, iconName) {
    if (!callback) return;
    if (err) return callback(err);

    if (iconName === "icoSafe") {
      return callback(null, "safe");
    } else if (iconName === "icoWarning") {
      return callback(null, "warning");
    } else {
      return callback(null, "untested");
    }
  });
};
