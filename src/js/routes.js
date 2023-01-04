"use strict";

module.exports = (app) => {
  const users = require("./controller");

  app.route("/users").get(users.getAll);
  app.route("/user/:id").get(users.get);
  app.route("/users/add").post(users.add);
  app.route("/user/:id").patch(users.update);
  app.route("/user/:id").delete(users.delete);
};
