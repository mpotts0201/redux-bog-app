import React, { Component } from 'react';

class Login extends Component {

    state = {
        email: 'murphy@potts.com',
        password: 'password'
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(this.state.email, this.state.password)
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <h2>Login</h2>

                <form onSubmit={this.signIn}>
                    <div>
                        <label>Email</label>
                        <input name='email' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input name='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button type='submit'>Sign In</button>
                </form>

            </div>
        );
    }
}

export default Login;