import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

function Login({ login, isAuthenticated }) {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user;

    function handleChange(e){
        setUser((prevState => ({...prevState, [e.target.name]: e.target.value})))
    }

    function handleSubmit(e){
        e.preventDefault();
        login(email, password);
    }

    //REDIRECT IF LOGGED IN
    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }
    return (
        <section className="container">
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={user.email} onChange={(e) => handleChange(e)} required />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <a href="register.html">Sign Up</a>
            </p>
        </section>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
