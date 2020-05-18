import React from 'react';
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        
    <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'login'}  name={'login'} component={'input'}/></div>
        <div><Field placeholder={'password'} name={'password'} component={'input'}/></div>
        <div><Field component={'input'} name={'remember me'} type={'checkbox'}/>remember me</div>
        <div>
            <button>login</button>
        </div>
    </form>
    )
}
const LoginReduxForm=  reduxForm({ form: 'contact'})(LoginForm)
const Login=(props)=>{
    const onSubmit=(FormData)=>{
        console.log(FormData)
    }
    return(
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login; 