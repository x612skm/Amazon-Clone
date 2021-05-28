import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login(){
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
            history.push('/')
            }
        })
        .catch(error => alert(error.message))

        //some fancy firebase login
    }  
    const register = e=> {
        e.preventDefault();
        auth //this is the authorisation from firebase.js
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it is succesfully created a new user with email and password
                console.log(auth);

                if(auth){
                    history.push('/')
                }

            })
            .catch(error => alert(error.message))
    }
    return(
        <div className ='login'>
            <Link to='/'>
            <img className="login__logo" src='http://www.americanbazaaronline.com/wp-content/uploads/2015/02/Amazon-Logo.jpg'/>
            </Link>

            

            <div className='login__container'>
                <h1>Sign-IN</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input type = 'text' value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>PassWord</h5>
                    <input type = 'password' value={password} onChange={e=>setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className="signinButton">Sign-In</button>
                </form>
                <p>
                    By signing in you accept terms and conditons as its a clone
                </p>

                <button onClick={register} className="login__registerButton">Create YOur AMAZON_Account</button>
            </div>
        </div>
    )
}

export default Login 