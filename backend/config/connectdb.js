import mongoose from 'mongoose'
const connect = async ()=>{
         try{
            await mongoose.connect(process.env.MONGO_URL)
            console.log("Connected")
         }
         catch(e){
            console.log("Error",e)
         }
}
export default connect