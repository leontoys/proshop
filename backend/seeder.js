/**To load initial data to mongodb 
 * The function to load and destroy data will be called via scripts
 * So check that out
*/
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

connectDB()//connect to mongoose db

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        console.log('Data destoryed!')
            process.exit() //success
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

const importData = async () => {
    try {
      destroyData()//first clean up db then create new data
      
      const createdUsers = await User.insertMany(users)//load sample data from file

      //get admin's id
      const adminUser = createdUsers[0]._id
      
      //products-created by admin
      const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser };
      })

      await Product.insertMany(sampleProducts)

      console.log('Data imported!')

      process.exit()
      
    } catch (error) {
        console.error(error.message)
        process.exit(1)//shut down
    }
}

//run via parameters
if(process.argv[2]==='-d'){
    destroyData()
}
else{
    importData()
}

