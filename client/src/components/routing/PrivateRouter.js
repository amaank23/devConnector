import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function PrivateRouter({ component: Component, auth, ...rest }) {
    return (
        <Route {...rest} render={props => !auth.isAuthenticated && !auth.loading ? (<Redirect to='/login' />) : (<Component {...props} />)} />

        // <Route path={path}>
        //     {!auth.isAuthenticated && !auth.loading ? (<Redirect to='/login' />) : (children)}
        // </Route>
    )
}

PrivateRouter.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRouter)

