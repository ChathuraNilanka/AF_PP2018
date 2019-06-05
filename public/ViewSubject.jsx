import React, {Component} from 'react';

import './App.css';

export default class ViewSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses:[]
        }

         this.showSubs = this.showSubs.bind(this);
    }

    componentDidMount() {
        fetch('af//af18/course/getall', {method: "GET"})
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
                        <td><button onClick={this.showSubs(course._id)} >View Subjects</button></td>
                    </tr>
                )
            }

            this.setState(
                this.state.courses = _courses
            );
        });
    }

    showSubs(id){
        const sub = [];
        fetch('af//af18/course/getsub/'+id, {method:"GET"})
        .then(res => res.json())
        .then(_data =>{
            const _sub = _data.subjects;
            console.log('44', _sub);
            
            for(const s of _sub){
                sub.push(s.name);
            }
        }).then(
            alert("Subjects :\n"+sub)
        )
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
                            
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
