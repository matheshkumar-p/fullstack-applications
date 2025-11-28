/**
 * Actions for index page.
 */

module.exports.home = function (req, res) {
  return res.render("./index", {
    title: "Project Template",
  });
};
