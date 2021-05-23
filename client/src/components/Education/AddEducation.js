import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { addEducation } from "../../actions/profile";

function AddEducation({ addEducation }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });
    function handleChange(event){
        setFormData(prevData => ({...prevData, [event.target.name]: event.target.name == 'current' ? event.target.checked : event.target.value}));
    }
    function handleSubmit(event){
        event.preventDefault();
        addEducation(formData, history);
    }
    return (
        <Fragment>
            <h1 className="large text-primary">
                Add Your Education
            </h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
                you have attended
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="* School or Bootcamp"
                    name="school"
                    value={formData.school} 
                    onChange={(event) => handleChange(event)}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="* Degree or Certificate"
                    name="degree"
                    required
                    value={formData.degree} 
                    onChange={(event) => handleChange(event)}
                />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Field Of Study" name="fieldofstudy"  value={formData.fieldofstudy} onChange={(event) => handleChange(event)} />
                </div>
                <div className="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" value={formData.from} onChange={(event) => handleChange(event)} />
                </div>
                
                <div className="form-group">
                <p><input type="checkbox" name="current" value={formData.current} onChange={(event) => handleChange(event)} /> Current School or Bootcamp</p>
                </div>
                {
                    !formData.current ? 
                    <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={formData.to} onChange={(event) => handleChange(event)} />
                    </div> : 
                    ''
                }

                <div className="form-group">
                <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Program Description"
                    value={formData.description} 
                    onChange={(event) => handleChange(event)}
                ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>

        </Fragment>
    )
}

export default connect(null, { addEducation })(AddEducation)
