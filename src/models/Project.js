const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    projectName: {
      type: String,
      required: [true, 'project name is requried'],
    },
    projectInfo: {
      type: String,
      required: [true, 'project description is required'],
    },
    projectImage: {
      type: String,
      required: [true, 'project image is required'],
    },
    projectUrl: {
      type: String,
      required: [true, 'please provide a link to project'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Project = mongoose.model('projects', ProjectSchema);
