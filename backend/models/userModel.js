import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//add method to check password
//we are using this. so let us 
userSchema.methods.matchPassword = async function (enteredPassword) {
  const result =  await bcrypt.compare(enteredPassword,this.password)
  console.log("compare passwords",result)
  return result
}

const User = mongoose.model('User', userSchema);

export default User;