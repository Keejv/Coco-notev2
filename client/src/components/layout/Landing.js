import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from "../auth/Login";
import Register from "../auth/Register";
import "./Layout.css"; // import CSS

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

    // const signUpButton = document.getElementById("signUp");
  // const signInButton = document.getElementById("signIn");
  // const container = document.getElementById("container");

  // signUpButton.addEventListener("click", () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton.addEventListener("click", () => {
  //   container.classList.remove("right-panel-active");
  // });

  return (
    <section className="landing">
      <Login />
      <Register />
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
