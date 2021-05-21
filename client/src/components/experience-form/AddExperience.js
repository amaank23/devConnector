import React, { Fragment, useState } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addExperience } from "../../actions/profile";
function AddExperience({ addExperience }) {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',

    });
    const history = useHistory();
    function handleChange(event){
        setFormData(prevData => ({...prevData, [event.target.name]: event.target.name == 'current' ? event.target.checked : event.target.value}));
    }
    function handleSubmit(event){
        event.preventDefault();
        addExperience(formData, history);
    }
    return (
        <Fragment>
            <h1 class="large text-primary">
            Add An Experience
            </h1>
            <p class="lead">
                <i class="fas fa-code-branch"></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form class="form" onSubmit={(event) => handleSubmit(event)}>
                <div class="form-group">
                <input type="text" placeholder="* Job Title" name="title" value={formData.title} onChange={(event) => handleChange(event)} required />
                </div>
                <div class="form-group">
                <input type="text" placeholder="* Company" name="company" value={formData.company} onChange={(event) => handleChange(event)} required />
                </div>
                <div class="form-group">
                <input type="text" placeholder="Location" name="location"value={formData.location} onChange={(event) => handleChange(event)} />
                </div>
                <div class="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" value={formData.from} onChange={(event) => handleChange(event)} />
                </div>
                <div class="form-group">
                <p><input type="checkbox" name="current" value={formData.current} onChange={(event) => handleChange(event)} /> Current Job</p>
                </div>
                {
                    !formData.current ? 
                    <div class="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={formData.to} onChange={(event) => handleChange(event)} />
                    </div> : 
                    ''
                }
                
                <div class="form-group">
                <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Job Description"
                    value={formData.description} onChange={(event) => handleChange(event)}
                ></textarea>
                </div>
                <input type="submit" class="btn btn-primary my-1" />
                <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
      </Fragment>
    )
}

export default connect(null, { addExperience })(AddExperience)
