const mongoose =require('mongoose');
const UserSchema= new mongoose.Schema([{
    title:{
        type:String,
        required:true
    },
    genere:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
            name:{
                type:String,
                required:true
            },
            nationality:{
                type:String,
                required:true
            }
}
}]);
// const UserSchemaa= new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     nationality:{
//         type:String,
//         required:true
//     }
// });

module.exports=mongoose.model("Book",UserSchema)
// module.exports=mongoose.model("Author",UserSchemaa)