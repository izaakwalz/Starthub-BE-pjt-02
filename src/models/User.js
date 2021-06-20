const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      require: [true, 'First name is requried'],
    },
    LastName: {
      type: String,
      require: [true, 'Last name is requried'],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, 'please provide your email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid eamil formart', // email validation
      ],
    },
    password: {
      type: String,
      min: 6,
      trim: true,
      required: [true, 'Password is required'],
    },
    studentId: {
      type: String,
      require: true,
      unique: true,
    },
    profilePicture: {
      data: Buffer,
      type: String,
    },
    bio: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model('users', UserSchema);
