import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';


function Experience({ experience , deleteExperience }) {
    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Company</th>
                    <th className="hide-sm">Title</th>
                    <th className="hide-sm">Years</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {
                        experience.map(exp => {
                            return (
                                <tr key={exp._id}>
                                    <td>{ exp.company }</td>
                                    <td className="hide-sm">{ exp.title }</td>
                                    <td className="hide-sm">
                                    { exp.from.split('T')[0] } - { exp.to !== null ? exp.to.split('T')[0] : 'Now' }
                                    </td>
                                    <td>
                                    <button className="btn btn-danger" onClick={() => deleteExperience(exp._id)}>
                                        Delete
                                    </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    profile: state.profile
})
export default connect(mapStateToProps, { deleteExperience })(Experience)