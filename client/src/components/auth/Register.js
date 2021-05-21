import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'

function Register({ setAlert, register, isAuthenticated }) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user;

    function handleChange(e){
        setUser((prevState => ({...prevState, [e.target.name]: e.target.value})))
    }

    function handleSubmit(e){
        e.preventDefault();
        if(password !== password2){
            setAlert("Password does not match", 'danger');
        } else {
            register({ name, email, password });
        }
    }
    //REDIRECT IF LOGGED IN
    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }
    return (
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form"  onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={user.name} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={user.email} onChange={(e) => handleChange(e)} />
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small
                >
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
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    minLength="6"
                    value={user.password2}
                    onChange={(e) => handleChange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </section>

    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
