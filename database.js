const mongodb=require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

mongodb.connect('mongodb://localhost:27017/TodoApp',(err,Client,flag)=>{

    if(err){
        console.log("DB Not Connect");
    }console.log("DB  Connect");
    client=1;
    const db1=Client.db('TodoApp');
    //___update___//

    db1.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("5e1349bb89b3f5108c4bd7d2")

    },{
        $set: {
            complete: flag
        }
    },{
        returnOriginal:false

    })
    //READ IN DB//
    /*db1.collection('Todos').find().toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Unable fetch todo",err);
        })*/

    //WRITE TO DB//
    /* db1.collection('Todos').insertOne({
         CarID:'A2576552',
         Name:"Meysam Mazdarani",
         Car:"Pegeut206 Type C",
         Mobile:"09025515726",
         complete:true,
     },(err,result)=>{
         if(err){
            return console.log("Unable Inseted todo");
         }else console.log(JSON.stringify(result.ops,undefined,2));
     })*/


})