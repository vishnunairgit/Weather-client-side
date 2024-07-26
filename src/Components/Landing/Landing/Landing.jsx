import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'


function Landing() {
const [loginsignup, setloginsignup] = useState('Login')

    return (
        <div >
            {loginsignup === 'Login' && <Login setloginsignup={setloginsignup}  /> }
            {loginsignup === 'Signup' && <Signup setloginsignup={setloginsignup} />}         
        </div>
    )
}

export default Landing