const Subject = require('../model/Subject');

exports.getallsubs = (req, res) =>{
    Subject.find((err, data)=>{
        if(err){
            res.json(data);
            console.log(err);
        }else{
            res.json(data);
        }
    })
}