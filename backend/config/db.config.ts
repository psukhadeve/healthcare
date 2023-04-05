var mongoose=require('mongoose')

export var url2="mongodb+srv://healthcare:mongo99%23@cluster0.7f2uqw1.mongodb.net/?retryWrites=true&w=majority"
//export var url2="mongodb://127.0.0.1:27017/aisha"
let config={ useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(url2,config,(err:any)=>{
    if(err){
       console.log(err)
    }else{
        console.log('db connection done')
       }
    
})