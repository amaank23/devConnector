import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { deleteEducation } from '../../actions/profile';


function Education({ education, deleteEducation }) {
    return (
        <Fragment>
           <h2 class="my-2">Education Credentials</h2>
        <table class="table">
            <thead>
                <tr>
                <th>School</th>
                <th class="hide-sm">Degree</th>
                <th class="hide-sm">Years</th>
                <th />
                </tr>
            </thead>
            <tbody>
                {
                    education.map(edj => {
                        return (
                            <tr key={edj._id}>
                                <td>{ edj.school }</td>
                                <td class="hide-sm">{ edj.degree }</td>
                                <td class="hide-sm">{ edj.from.split('T')[0] } - { edj.to !== null ? edj.to.split('T')[0] : 'Now' }</td>
                                <td>
                                    <button class="btn btn-danger" onClick={() => deleteEducation(edj._id)}>
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

export default connect(null, { deleteEducation })(Education)
