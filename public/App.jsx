import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import AddNew from './AddNew';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses:[]
        }

         //this.clacTotal = this.clacTotal.bind(this);
    }

    componentDidMount() {
        fetch('af/af18/course/getall', {method: "GET"})
        .then(res => res.json())
        .then(_data=>{
            const _courses= [];
            console.log(_data);
            for(const course of _data){
                _courses.push(
                    <tr key={course._id}>
                        <td>{course.name}</td>
                        <td>{course.code}</td>
                        <td>{course.p_mark}</td>
                        <td>{course.l_charge}</td>
                        <td><button onClick={this.clacTotal(course._id)} >Calculate Total</button></td>
                    </tr>
                )
            }

            this.setState(
                this.state.courses = _courses
            );
        });
    }

    clacTotal(id){
        fetch('http://localhost:8080/af/courses/calctotal/'+id, {method: "GET"})
        .then(res => res.json())
        .then(_data =>{
            console.log(_data);
            alert("Total amount is : Rs." +_data+".00");    
        })
    }  

    addNew(){
        ReactDOM.render(<AddNew/> , document.getElementById('root'));
    }

    render() {
        return(
            <div>
                <h2 align="center">Course Details</h2>
                <form>
                    <table align="center">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Pass Mark</th>
                                <th>Lecture in Charge</th>
                            </tr>
                            
                                {this.state.courses}
                            <tr><button onClick={this.addNew}>Add New</button></tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
