import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import Scroller from "../components/scroller"
//import PortfolioModal from "../components/portfolio/modal"
//import PortfolioCarousel from "../components/portfolio/carousel"
import "../sass/login.css";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "3xceed",
      password: "TiAaJa",
      error: "Error occured",
      showLogin: true,
    };

    this.toggleSignRegisterPanels = this.toggleSignRegisterPanels.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
    this.signInClick = this.signInClick.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  toggleSignRegisterPanels() {
    const showLogin = !this.state.showLogin;
    this.setState({ showLogin });
  }
  signUpClick() {
    // this.setState({showLogin:false});
  }

  signInClick() {
    // this.setState({showLogin:false});
  }

  loginClick() {
    // this.setState({ error: '' });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    const containerClasses = this.state.showLogin
      ? "containerF"
      : "containerF right-panel-active";

    return (
      <div className={containerClasses} id="containerID">
        <div className="form-container sign-up-container">
          <form className="LoginForm" action="#">
            <h1 className="loginH1">Create Account</h1>
            <div className="social-container">
              <a href="#" className="loginA social">
                <i className="fab fa-facebook-f"></i>
              </a>{" "}
              <a href="#" className="loginA social">
                <i className="fab fa-google-plus-g"></i>
              </a>{" "}
              <a href="#" className="loginA social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="loginSpan">
              or use your email for registration
            </span>{" "}
            <input className="loginI" type="text" placeholder="Name" />{" "}
            <input className="loginI" type="email" placeholder="Email" />{" "}
            <input className="loginI" type="password" placeholder="Password" />
            <button className="loginB">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="LoginForm" action="#">
            <h1 className="loginH1">Sign in</h1>
            <div className="social-container">
              <a href="#" className="loginA social">
                <i className="fab fa-facebook-f"></i>
              </a>{" "}
              <a href="#" className="loginA social">
                <i className="fab fa-google-plus-g"></i>
              </a>{" "}
              <a href="#" className="loginA social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="loginSpan">or use your account</span>{" "}
            <input className="loginI" type="email" placeholder="Email" />{" "}
            <input className="loginI" type="password" placeholder="Password" />{" "}
            <a className="loginA" href="#">
              Forgot your password?
            </a>
            <button className="loginB" id="login" onClick={this.loginClick}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="loginH1">Welcome Back!</h1>
              <p className="loginP">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="loginB ghostB"
                id="signIn"
                onClick={this.toggleSignRegisterPanels}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="loginH1">Hello, Friend!</h1>
              <p className="loginP">
                Enter your personal details and start journey with us
              </p>
              <button
                className="loginB ghostB"
                id="signUp"
                onClick={this.toggleSignRegisterPanels}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
