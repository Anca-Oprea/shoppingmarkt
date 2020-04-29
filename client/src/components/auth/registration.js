import React, { Component } from 'react';
import axios from "axios";
import { Button } from "react-bootstrap";




class Registration extends React.Component {

    constructor(props) {
        super(props)
        this.state =
        {
            username: '',
            firstName: '',
            lastName: '',
            newPassword: '',
            phoneNumber: '',
            securityQuestions:
                [
                    {
                        question: 'What was best friends name?',
                        answer: ''
                    },

                    {
                        question: 'What was the name of your first pet?',
                        answer: ''
                    }

                ],

            succes: null,
            mesaje: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
    }

    handleSubmit(event) {
        const {
            username,
            firstName,
            lastName,
            newPassword,
            phoneNumber,
            securityQuestions
        } = this.state
        axios
        .post("https://localhost:3000/registrations", {
            user: {
                username : this.username,
                firstName: this.firstName,
                lastName: this.lastName,
                newPassword: this.newPassword,
                phoneNumber: this.phoneNumber,
                securityQuestions: this.securityQuestions
            }
        },
          { withCredentials : true }
        ) 
        .then(response =>{
            console.log("registration res" , response.user)
        })
        .catch(error =>{
            console.log("registration error", error)

        });

        event.preventDefault();


    }

    handleChange(event) {
        const target= event.target;
        const value = target.type === 'checked'? target.checked: target.value;
        const name = target.name;

        this.setState({[name]: value});
         return true;
    }

    handleArrayChange(event) {
        const target = event.target
        const value = target.value;
        const index = target.dataset.index;

        var updated = this.state.securityQuestions;

        updated[index].answer = value;

        this.setState({"securityQuestions": updated});

        return true;

    }



    render() {
        return (

            <div className = "container">
                <h1>User Registration</h1>
                <p>   Please fill in all the required fields
                 to create a new user account.</p>
                {this.state.succes === false &&
                    <p className=" alert alert-danger" role="alert">

                        {this.state.succes}
                    </p>
                }

                {
                    this.state.succes === true &&
                    <p className="alert alert-succes">
                        User successfuly register
                   </p>
                }

                {!this.state.succes &&
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                required
                                onChange={this.handleChange} />

                            <input type="password"
                                className="form-control "
                                placeholder="Password"
                                name="newPassword"
                                required
                                onChange={this.handleChange} />

                            <input type="text"
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                required
                                onChange={this.handleChange} />

                            <input type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                required
                                onChange={this.handleChange} />


                            <input type="text"
                                className="form-control"
                                placeholder="Phonne Number"
                                name="phoneNumber"
                                required
                                onChange={this.handleChange} />
                        </div>

                        {this.state.securityQuestions.map((item, index)=>(
                            <div className="form-group" key={index}>
                            <label>{item.question}</label>
                            <input
                                type="text"
                                className="form-control"
                                data-index={index}
                                placeholder="Answer"
                                required
                                onChange={this.handleArrayChange} />
                        </div>
                        ))}
                            <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                }

            </div>
            
        )

    }

}


export default Registration;