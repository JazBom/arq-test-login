import React, { useState } from 'react';

const LogInForm = () => {

const [logInForm, setLogInForm] = useState({
        name: '',
        password: ''
      })

const [buttonActive, setButtonActive] = useState(true)

const changeHandlerLogIn = (e) => {
    setButtonActive(false);
      const newLogInFormState = {...logInForm};
        newLogInFormState[e.target.name] = e.target.value;
        setLogInForm(newLogInFormState);
    }

return (
<div>
    <form>
    <label>login</label>
    <input onChange={changeHandlerLogIn} type="text" name="username"/>
     <input onChange={changeHandlerLogIn} type="text" name="password"/>
     <button type='submit' disabled={buttonActive}
     // I would place the onChange={props.submitHandler} here
     >Submit</button>
     </form>
</div>
)
};

export { LogInForm };