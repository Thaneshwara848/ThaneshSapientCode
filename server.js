const express=require('express')
const path=require('path')
const app=express();
app.use(express.static(__dirname+'/dist/space-x'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/space-x/index.html'))
})
app.listen(process.env.POST ||8000);