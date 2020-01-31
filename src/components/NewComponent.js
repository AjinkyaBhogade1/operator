import validate from 'react-joi-validation';

var schema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().min(8).required()
});

class MyComponent extends Component {
  render() {
    const {
      user: { username, password },
      errors, changeHandler, validateHandler
    } = this.props;

    return(
      <div >
        <input type="text"
          value={username}
          onChange={ changeHandler('username') }
          onBlur={ validateHandler('username') }
        />

        <span className={style.error}> { errors.username } </span>

        <input type="password"
          value={password}
          onChange={ changeHandler('password') }
          onBlur={ validateHandler('password') }
        />

        <span className={style.error}> { errors.password } </span>

        <input type="Submit" value="Sign In" />
      </div>
    );
  }
}

MyComponent.defaultProps = {
    username: '',
    password: ''
  };
  
  var validationOptions = {
    joiSchema: schema,
    only: 'user'
  };
  
  validate(MyComponent, validationOptions)