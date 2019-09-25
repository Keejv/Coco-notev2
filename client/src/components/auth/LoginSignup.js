import React, {useState} from "react";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import styles from "./LoginSignup.module.css";

function LoginSignup({ setAlert, register, login, isAuthenticated }) {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [signUpFormData, setSignUpFormData] = useState({
    signupName: '',
    signupEmail: '',
    signUpPassword: '',
    signUpPassword2: ''
  });

  const [loginFormData, setLoginFormData] = useState({
    loginEmail: '',
    loginPassword: ''
  });

  const { signupName, signupEmail, signUpPassword, signUpPassword2 } = signUpFormData;
  const { loginEmail, loginPassword } = loginFormData;

  const onSignupChange = e => setSignUpFormData({ 
    ...signUpFormData, [e.target.name]: e.target.value
  });

  const onLoginChange = e => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
  };

  const handleClick = e => {
    setRightPanelActive(!rightPanelActive);
  }

  const onSignupSubmit = async e => {
    e.preventDefault();
    if(signUpPassword !== signUpPassword2){
    setAlert('Password do not match', 'danger');
    } else {
      register({ name: signupName, email: signupEmail, password: signUpPassword });
    }
  }

  const onLoginSubmit = async e => {
    e.preventDefault();
    login(loginEmail, loginPassword);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className={`${styles.container} ${!rightPanelActive ? styles.rightPanelActive : ''}`} id="container">
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <form className={styles.form} onSubmit={onSignupSubmit}>
          <h1 className={styles.title}>Create Account</h1>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            name="signupName"
            value={signupName}
            onChange={e => onSignupChange(e)}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
            name="signupEmail"
            value={signupEmail}
            onChange={e => onSignupChange(e)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            name="signUpPassword"
            value={signUpPassword}
            onChange={e => onSignupChange(e)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm Password"
            name="signUpPassword2"
            value={signUpPassword2}
            onChange={e => onSignupChange(e)}
          />
          <button className={styles.button}>Sign Up</button>
        </form>
      </div>
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form className={styles.form} onSubmit={e => onLoginSubmit(e)}>
          <h1 className={styles.title}>Sign in</h1>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
            name="loginEmail"
            value={loginEmail}
            onChange={e => onLoginChange(e)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            name="loginPassword"
            value={loginPassword}
            onChange={e => onLoginChange(e)}
            minLength="6"
          />
          <button className={styles.button}>Sign In</button>
        </form>
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1>Welcome Back!</h1>
            <p className={styles.text}>
              To keep connected with us please login with your personal info
            </p>
            <button 
              onClick={handleClick} 
              className={styles.ghost} 
              id="signIn"
            >
              Sign In
            </button>
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <h1>Hello, Hero!</h1>
            <p className={styles.text}>
              Enter your personal details and start journey with us
            </p>
            <button 
              onClick={handleClick} 
              className={styles.ghost} 
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register, login })(LoginSignup);
