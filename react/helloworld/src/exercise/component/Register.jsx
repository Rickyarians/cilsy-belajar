import {useState} from 'react'
import './../style.scss'

const Register = () => {
    

    return (
        <>
            <div style={{textAlign: 'center', color: 'white'}}>
                <h3>SIGN UP FOR FREE</h3>
            </div>

            <div>
                <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '10px', paddingRight: '10px'}}>
                    <div style={{flexGrow: 1}}>
                        <input 
                            placeholder="First Name"
                            type="text"
                            name="firstname"
                            id="firstname"
                            className="input"
                            />
                    </div>
                    <div style={{flexGrow: 1, textAlign: 'right'}}>
                        <input 
                            placeholder="Last Name"
                            type="text"
                            name="lastname"
                            id="lastname"
                            className="input"
                            />
                    </div>
                  
                </div>

                <div style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '10px'}}>
                        <button className="signup-btn">
                                Sign Up
                        </button>
                </div>
               
            </div>
        </>
    )
}


export default Register