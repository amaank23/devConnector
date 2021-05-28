import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getProfileByUserId } from '../../actions/profile';
import Spinner from '../layout/Spinner';


function Profile({ getProfileByUserId, profile, auth: { isAuthenticated, user } }) {
    const {id} = useParams();
    useEffect(() => {
        getProfileByUserId(id);
    }, [getProfileByUserId])
    console.log(profile);
    return profile !== null ? (
        <Fragment>
            <Link to="/developers" className="btn btn-light">Back To Profiles</Link>
            {isAuthenticated && user !== null && user._id == profile.user._id && ( <Link to="/edit-profile" className="btn btn-primary">Edit Profile</Link> )}

            <div className="profile-grid my-1">
            {/* <!-- Top --> */}
            <div className="profile-top bg-primary p-2">
                <img
                className="round-img my-1"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt=""
                />
                <h1 className="large">{profile.user.name}</h1>
                <p className="lead">Developer at {profile.company}</p>
                <p>{profile.location}</p>
                <div className="icons my-1">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-globe fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                </div>
            </div>

            {/* <!-- About --> */}
            <div className="profile-about bg-light p-2">
                <h2 className="text-primary">{profile.user.name.split(' ')[0]}'s Bio</h2>
                <p>
                { 'bio' in profile ? profile.bio : 'No Bio Available'}
                </p>
                <div className="line"></div>
                <h2 className="text-primary">Skill Set</h2>
                <div className="skills">
                {profile.skills.length > 0 ? profile.skills.map((skill, index) => {
                                    return (
                                        <div className="p-1" key={index}><i className="fa fa-check"></i> {skill}</div>
                                    )
                                }) : '' }
                </div>
            </div>

            {/* <!-- Experience --> */}
            <div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Experience</h2>
                {profile.experience.length > 0 ? profile.experience.map(exp => {
                    return (
                        <div key={exp._id}>
                            <h3 className="text-dark">{exp.company}</h3>
                            <p>{exp.from.split('T')[0]} - {exp.current ? 'Current' : exp.to.split('T')[0]}</p>
                            <p><strong>Position: </strong>{exp.title}</p>
                            <p>
                                {exp.description !== '' ? (
                                    <Fragment>
                                        <strong>Description: </strong>{exp.description}
                                    </Fragment>
                                    
                                ) : 'No Description Available'}
                                
                            </p>
                        </div>
                    )
                }) : 'No Experience Available'}
            </div>

            {/* <!-- Education --> */}
            <div className="profile-edu bg-white p-2">
                <h2 className="text-primary">Education</h2>
                {profile.education.length > 0 ? profile.education.map(edj => {
                    return (
                        <div>
                            <h3>{edj.school}</h3>
                            <p>{edj.from.split('T')[0]} - {edj.current ? 'Current' : edj.to.split('T')[0]}</p>
                            <p><strong>Degree: </strong>{edj.degree}</p>
                            <p><strong>Field Of Study: </strong>{edj.fieldofstudy}</p>
                            <p>
                            {edj.description !== '' ? (
                                    <Fragment>
                                        <strong>Description: </strong>{edj.description}
                                    </Fragment>
                                    
                                ) : 'No Description Available'}
                            </p>
                        </div>
                    )
                }) : 'No Education Available'}
                
            </div>
            </div>
        </Fragment>
    ) : <Spinner />
}

const mapStateToProps = state => ({
    profile: state.profile.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileByUserId })(Profile)
