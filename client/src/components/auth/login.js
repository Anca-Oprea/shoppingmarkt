import React, { Component } from 'react';
import Registration from './registration';


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username:"",
            email:"",
            password:"",
            succes: null,
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
        return true;
    }

    handleSubmit(event) {

    }
    render() {
        return (
            

            <div>
               
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>Login</h1>
                        {this.state.succes === false &&
                            <p className="alert alert-danger" role="alert">
                                {this.state.message}
                            </p>}
                        {!this.state.succes &&
                            <div>
                                <form onSubmit={this.hahdleSubmit}>
                                    <h2 className="text-center">Log in </h2>
                                    <div className=" form-group">
                                        <imput
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            name="username"
                                            required
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <imput
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            onChange={this.handleChange} />
                                            </div>

                                        <div className="form-group">
                                            <imput
                                                type="submit"
                                                className="btn btn-primary btn-block">Log in</imput>

                                        </div>
                                </form>
                            </div>}
                    
                    
                </div>

                </div>

            </div>
        )
    }
}

export default Login;