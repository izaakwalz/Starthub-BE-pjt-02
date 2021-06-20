const express = require('express');
const router = express.Router();
const {
  addProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, addProject);

router.get('/', getProjects);

router.get('/:id', getProject);

router.put('/:id', protect, updateProject);

router.delete('/:id', protect, deleteProject);

module.exports = router;
