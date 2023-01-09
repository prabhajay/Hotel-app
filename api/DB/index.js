
const mongoose=require('mongoose')
mongoose.set('strictQuery', false);


module.exports= ()=>{
    const {DB_USERNAME,
        DB_PASSWORD, 
        DB_NAME}=process.env
const uri=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.yxhak5s.mongodb.net/${DB_NAME}`

mongoose.connect(uri).catch(err=>{

    console.error(err)})
}

mongoose.connection.on('open',()=>{
    console.log('Mongoose connected successfully')
})

