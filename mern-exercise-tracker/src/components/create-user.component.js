import React, { Component } from 'react';
import axios from 'axios';

export default class CreatExercise extends Component {
    constructor(props) {
        // always call super when making a constructor that extends component
        super(props);

        //Explicitly defining each 'this', binding 'this' to each method
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        // prevents the default html form submit behavior
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        // using axios to send http post request with the json user object and the req
        axios.post('http://localhost:5000/users/add', user)
            .then(response => console.log(response.data));

        // Resets the username back to blank so the user can enter another username
        this.setState({
            username: ''
        })
    }


    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}