import React from 'react';

let styles = {
  marginTop: '10%'
};

let centerAlign = {
  marginLeft: "40%",
  marginTop: "3%"
}

class AddDocument extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isValidLogin: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.target.classList.add('active');

    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target.name);
  }

  handleSubmit() {  
    console.log('component state', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 4 chars`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  addDoc = (e) => {
    e.preventDefault();   
    this.handleSubmit(); 
    let isValidLogin = false; 
    if (this.state.username === "quest@global.com" && this.state.password === "Quest") {          
        this.props.history.push('/list-visitor')
    } else {
      this.setState({isValidLogin : true});
    
    }
  }

  render() {
    return (
      <div>
        <div style={styles}>
          <div className="row justify-content-md-center ">
            <div className="col-md-3 form-back">
              <h2 className="text-center ">Login</h2><br></br>

              <form novalidate>
                {this.state.isValidLogin ? (<div className="serverError serverErrorBox">Please Enter Valid Credentials</div>) : null }
                <div className="form-group">
                  <label id="usernameLabel">Username</label>
                  <input className="form-control"
                    type="email"
                    name="username"
                    ref="username"
                    placeholder="Enter your Email"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required />
                  <div className="error" id="usernameError" />
                </div>
                <div className="form-group">
                  <label id="passwordLabel">Password</label>
                  <input className="form-control"
                    type="password"
                    name="password"
                    ref="password"
                    placeholder="Enter your Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    pattern=".{5,}"
                    required />
                  <div className="error" id="passwordError" />
                </div>
                <button className="btn btn-primary"
                  onClick={this.addDoc} style={centerAlign}>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDocument;

var Results = React.createClass({
  render: function () {
    return (
      <div id="results" className="search-results">
        Some Results
          </div>
    );
  }
});