const Course = require('../model/Course');
const Subject = require('../model/Subject');



exports.add = (req, res) => {
    const course = new Course();

    course.name = req.body.name;
    course.code = req.body.code;
    course.p_mark = req.body.mark;
    course.l_charge = req.body.charge;
    course.subjects = req.body.subjects;

    course.save((e)=>{
        if(e){
            res.json(e);
            console.log(e);
        }else{
            res.json({
                "message": "success",
                "Data": course
            });
        }
    });
}

exports.getAll = (req, res)=>{
    Course.find((err, data)=>{
        if(err){
            res.json(err);
            console.log(err);
        }else{
            res.json(data);
        }
    });
}

exports.getsubjects = (req, res)=>{
    // console.log(getval(req.params.id));
    // res.json(va());

    Course.findById(req.params.id).populate('subjects').exec().then(data=>{
        console.log("data44",data);
        res.json(data);
    })
}

function  getval(id){
    let s_data = [];
    Course.findById(id, (err, data)=>{
        
        if(err){
            res.json(err);
            console.log(err);
        }else{
            const subjects = data.subjects;

            for(var i in subjects){
                Subject.findById(subjects[i], (err, _data) =>{
                    if(err){
                        //console.log(err);
                    }else{
                        if(_data){
                            const name = _data.name;
                            s_data.push(name);
                        }
                        //console.log("DATA", s_data); 
                        
                    }
                }); 
            }
            console.log("sdata", s_data);
        }
        
    });
    
    return s_data;
}

