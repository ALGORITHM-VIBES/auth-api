import { Schema } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, trim: true },
});

export = UserSchema;