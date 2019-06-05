import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import App from './App';

export default class AddNew extends Component{

    constructor(props){
        super(props);
        this.state={
            subjects:[],
            subId:[]
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount(){
        fetch('af/af18/subject/getall', {method: "GET"})
        .then(res => res.json())
        .then(_data =>{
            const _subjects =[];
            console.log("data",_data);

            for(const subject of _data){
                _subjects.push(
                        <input type="checkbox"  name={subject._id} onChange={this.setCourseId}>{subject.name}</input>
                )
            }

            this.setState(
                this.state.subjects = _subjects
            )
            console.log("32",this.state.subjects);
        });
        
    }

    setCourseId(event){
        event.preventDefault();


    }

    submit(){
        const subs = ["5cf76951bb437717643d6254", "5cf76992bb437717643d6255"]
        const body = {
            name: this.refs.name.value,
            code: this.refs.code.value,
            mark: this.refs.mark.value,
            charge: this.refs.charge.value,
            subjects:subs
        }

        fetch('af/af18/course/add', {
            method: "POST",
            body: JSON.stringify(body),
            headers :{
                "Content-Type": "application/json"
            }
        }).then(res =>{
            alert("New Course added");
            ReactDOM.render(<App/> , document.getElementById('root'));
        }).catch(err =>{
            console.log(err);
        });
    }
    cancel(){
        ReactDOM.render(<App/> , document.getElementById('root'));
    }

    render(){
        return(
            <div>
                <h2 align="center">Add New Course</h2>
                <form onSubmit={this.submit}>
                    <table align="center">
                        <tbody>
                            <tr>
                                <td>Course Name</td>
                                <td><input type="text" ref="name"/></td>
                            </tr>
                            <tr>
                                <td>Course Code</td>
                                <td><input type="text" ref="code"/></td>
                            </tr>
                            <tr>
                                <td>Pass Mark</td>
                                <td><input type="text" ref="mark"/></td>
                            </tr>
                            <tr>
                                <td>Lecture in Charge</td>
                                <td><input type="text" ref="charge"/></td>
                            </tr>
                            <tr>
                                <td>Select Subjects</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit">Submit</button>
                                    <button onClick={this.cancel} >Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}