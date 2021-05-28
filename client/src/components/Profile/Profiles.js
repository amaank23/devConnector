import React, { Fragment, useEffect } from 'react'
import { getAllProfiles } from '../../actions/profile'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';


function Profiles({ getAllProfiles, profiles }) {
    useEffect(() => {
        getAllProfiles();
    }, [getAllProfiles]);
    return profiles.length > 0 ? (
        <Fragment>
            <h1 class="large text-primary">Developers</h1>
            <p class="lead">
                <i class="fab fa-connectdevelop"></i> Browse and connect with developers
            </p>
            <div class="profiles">
            {
                profiles.map(profile => {
                    return (
                        <div class="profile bg-light" key={profile._id}>
                            <img
                                class="round-img"
                                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                alt=""
                            />
                            <div>
                                <h2>{profile.user.name}</h2>
                                <p>Developer at {profile.company}</p>
                                <p>{profile.location}</p>
                                <Link to={`/profile/${profile.user._id}`} className="btn btn-primary">View Profile</Link>
                            </div>

                            <ul>
                                {profile.skills.length > 0 ? profile.skills.map((skill, index) => {
                                    return (
                                        <li class="text-primary" key={index}>
                                            <i class="fas fa-check"></i> {skill}
                                        </li>
                                    )
                                }) : '' }
                            </ul>
                        </div>
                    )
                })
            }
            </div>
        </Fragment>
    ) : (<Spinner />)
    
}

const mapStateToProps = state => ({
    profiles: state.profile.profiles
})

export default connect(mapStateToProps, { getAllProfiles })(Profiles)
