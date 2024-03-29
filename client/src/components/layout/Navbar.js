import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
        <li>
        <Link to='/profiles'>
        Users
        </Link>
      </li>
      <li>
        <Link to='/posts'>
        Notes
        </Link>
      </li>
            <li>
        <Link to='/dashboard'>
        <i className='fas fa-user' />{' '}
        <span className='hide-sm'>User info</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
        Users
        </Link>
      </li>

    </ul>
  );
  return (
    <nav className="navbar">
    <h1>
      <Link to='/posts'>
        <i className="fas fa-code"></i> CocoNote</Link>
    </h1>
    { !loading && <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>}
  </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
