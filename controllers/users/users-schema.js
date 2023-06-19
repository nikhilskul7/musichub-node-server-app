import mongoose from 'mongoose';

export const usersSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    role: {
      type: String,
      enum: ['MUSIC-CREATOR', 'CONTENT-VIEWER', 'ADMIN'],
      required: true,
    },
  },
  { collection: 'users', timestamps: true, discriminatorKey: 'userModel' }
);

export const adminSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['SUPER', 'REGULAR', 'MUSIC-CREATOR', 'CONTENT-VIEWER'],
    required: true,
    default: 'REGULAR',
  },
  adminFromDate: { type: Date, required: true, default: Date.now() },
});

export const creatorSchema = mongoose.Schema({
  bio: { type: String, required: true, default: 'I am a music creator' },
  profilePic: {
    type: String,
    required: true,
    default: 'https://www.w3schools.com/howto/img_avatar.png',
  },
  website: {
    type: String,
    required: true,
    default: 'https://www.w3schools.com/howto/img_avatar.png',
  },
});
