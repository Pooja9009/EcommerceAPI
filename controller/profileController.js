const Profile = require("../models/profile");
// const Post = require("../routes/profile-routes");

const getAllProfile = (req, res, next) => {
  Profile.find()
    .then((profiles) => {
      res.json(profiles);
    })
    .catch(next);
};

const createProfile = (req, res, next) => {
  let profile = {
    ...req.body,
    image: req.file.filename,
    user: req.user.userId,
  };
  Profile.create(profile)
    .then((profile) => {
      res.status(201).json(profile);
    })
    .catch(next);
};

const updateProfile = (req, res, next) => {
  res.status(501).json({ reply: "PUT request not supported" });
};

const deleteProfile = (req, res, next) => {
  post
    .deleteMany()
    .then((reply) => {
      res.status(200).json({ reply: "Profile deleted" });
    })
    .catch(next);
};

const getProfileByID = (req, res, next) => {
  Profile.findById(req.params.id)
    .then((profile) => {
      res.json(profile);
    })
    .catch(next);
};

const putProfileByID = (req, res, next) => {
  Profile.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((profile) => {
      res.json(profile);
    })
    .catch(next);
};

const deleteProfileByID = (req, res, next) => {
  Profile.findByIdAndDelete(req.params.id)
    .then((reply) => {
      res.status(200).json({ reply: "Profile deleted" });
    })
    .catch(next);
};

module.exports = {
  getAllProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  getProfileByID,
  putProfileByID,
  deleteProfileByID,
};
