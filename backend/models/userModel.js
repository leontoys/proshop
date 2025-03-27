import mongoose from 'mongoose';
import bcrypt, { hash } from "bcrypt";

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

userSchema.pre('save',async function (next) {
  if(!this.isModified('password')){
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model('User', userSchema);

export default User;