import mongoose from "mongoose"

mongoose.connect("mongodb+srv://mateussousa157:Mp92699004@cluster0.mom8hib.mongodb.net/alura-node")

let db = mongoose.connection

export default db