"use strict";

const db = require("./database");

exports.getAll = (req, res) => {
  const query = `SELECT * FROM user`;
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result);
  });
};

exports.get = (req, res) => {
  const query = `SELECT * FROM user WHERE id=${req.params.id}`;
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result[0]);
  });
};

exports.add = (req, res) => {
  const { username, mail, id } = req.body;
  if (!(username && mail && id))
    return res
      .status(400)
      .json({ message: "Username, mail and id are required" });
  db.query(`SELECT * FROM user WHERE id=${id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length !== 0)
      return res.status(404).json(`User with id ${id} exists`);
    const query =
      "INSERT INTO `user`(`username`, `mail`, `id`) VALUES('" +
      username +
      "', '" +
      mail +
      "', '" +
      id +
      "')";
    db.query(query, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json(`User with id ${id} was created`);
    });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { username, mail } = req.body;
  if (!(username || mail))
    return res.status(400).json({ message: "Required username or mail" });
  db.query(`SELECT * FROM user WHERE id=${id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json("No user with this id");
  });
  let query = "";
  if (username) {
    query = `UPDATE user SET username='${username}' WHERE id=${id}`;
    db.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  if (mail) {
    query = `UPDATE user SET username='${mail}' WHERE id=${id}`;
    db.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  res.status(200).json({ message: `User with id ${id} was updated` });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id required" });
  const query = `DELETE FROM user WHERE id=${id}`;
  db.query(`SELECT * FROM user WHERE id=${id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json("No user with this id");
    db.query(query, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(`User with id ${id} was deleted`);
    });
  });
};
