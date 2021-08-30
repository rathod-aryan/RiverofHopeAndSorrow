const express = require("express");
const router = express.Router();

const Projects = require("../models/project");
const Comments = require("../models/comments");

// Will show all projects
router.get("/", (req, res) => {
  Projects.find({}, (err, projects) => {
    if (err) {
      console.log(err);
    } else {
      projects.sort((a, b) => a.index - b.index);
      res.render("project/index", {
        projects,
      });
    }
  });
});

router.post("/:name", (req, res) => {
  const { email, name, comment } = req.body;
  Projects.find({ name: req.params.name }, (err, project) => {
    if (err) {
      console.log(err);
    } else {
      const newComment = new Comments({
        email,
        name,
        comment,
        project: project[0]._id,
        projectAuthor: project[0].name,
      });
      console.log(newComment);
      newComment.save();

      res.redirect(`/projects/${req.params.name}`);
    }
  });
});

// Will show project of particular by username
router.get("/:name", (req, res) => {
  Projects.find({ name: req.params.name }, (err, project) => {
    if (err) {
      throw err;
    } else {
      //   console.log(project);
      Comments.find({ projectAuthor: project[0].name }, (err, comments) => {
        if (err) {
          throw err;
        } else {
          res.render("project/show", {
            project: project[0],
            comments,
          });
        }
      });
    }
  });
});

module.exports = router;
