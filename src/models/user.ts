import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  name: string;
  number: number;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
