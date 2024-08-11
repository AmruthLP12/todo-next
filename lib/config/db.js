import mongoose from "mongoose"

export const ConnectDb = async () =>{
    await mongoose.connect('mongodb+srv://clu:clu123@myapp.o1shzcg.mongodb.net/todo?retryWrites=true&w=majority&appName=myapp')
    console.log("DB Connected")
}