import { Schema } from "mongoose";

/**
 * @constant
 * @description user schema resposible for sharing user data to mongo database from authentication application
 * @unique username
 * @optional email
 * @opional password
 */
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  actions: {
    type: Object,
  },
});

/**
 * @exports
 * @constant UserSchema
 */
export = UserSchema;