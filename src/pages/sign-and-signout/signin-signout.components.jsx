import React from 'react'

import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.components';


import './signin-signout.styles.scss';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;
