const Book=require('./Schema')
// const Author=require('./Schema')
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
app=express();
dotenv.config()
app.use(express.json())
app.use(cors())
port=process.env.PORT
mongourl=process.env.MONGO_URL
const DB= async()=>{
    await mongoose.connect(mongourl);
    try{
        console.log('connected to db')
    }catch(error){
        console.log("error connectting",error)
    }
}
DB();

app.get('/books',(req,res)=>{
    try{
        book=Book.find()
        author=Author.find()
    if(book){
    res.json(book)
}
    if (author){
        res.json(author)
    }
}catch(error){
        res.status(400).json({error:"error"})
    }
})

app.post('/booksnew',async(req,res)=>{
    const {title,genere,author}=req.body;
    try{
    if(title,genere,author){
    book1=new Book({title,genere,author})
    await book1.save();
    res.status(200).json({message:"Book created"});
}
    else{
        res.status(500).json({message:"something went wrng"});
    }
    }catch(error){
        res.status(500).json({error:"error try later"});
    }

});
app.put('/books/:id',async(req,res)=>{
    const {author}=req.body;
    try{
    if(author==null || author){
    authors=Book.findByIdAndUpdate({author})
    res.json(authors)
    res.status(200).json({message:"Author"});
}
    else{
        res.status(500).json({message:"something went wrng"});
    }
    }catch(error){
        res.status(500).json({error:"error try later"});
    }

});
app.delete('/books/:id',async(req,res)=>{
    const {title,genere,author}=req.body;
    try{
    deletebook=Book.findByIdAndDelete(req.parms.id)
    res.status(200).json({message:"Deleted"});
    }catch(error){
        res.status(500).json({error:"error try later"});
    }

});






app.listen('port',()=>{
    console.log(`App running at http://localhost${port}`)
})