import {useState, useEffect} from 'react'
import './../style.scss'

const Login = (props) => {
    const initialPerson = {
        firstname : '',
        lastname : ''
    }

    // state penampung inputan
    const [person, setPerson] = useState(initialPerson)

    useEffect(() => {
        //   apa yang ada disini
        if(person.firstname.length  == 10) {
            alert('firstname terlalu panjang maximal 10 karakter')
        }
    }, [person])

    useEffect(() => {
        //   apa yang ada disini
       
    }, [])



    const onChangeInput = (e) => {
        setPerson({
            ...person,
            // age : nilai
            // name : nilai
            [e.target.name] : e.target.value
        })
    }


    return (
        <>
            <div style={{textAlign: 'center', color: 'white'}}>
                <h3>LOG IN</h3>
            </div>

            <div>
                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '15px', paddingRight: '15px'}}>
                    <div style={{flexGrow: 1}} >
                        {person.firstname}
                        <input 
                            placeholder="First Name"
                            type="text"
                            name="firstname"
                            id="firstname"
                            className="input-login"
                            onChange={onChangeInput}
                            value={person.firstname}
                            />
                    </div>
                    <div style={{flexGrow: 1, marginTop: '20px'}}>
                        {person.lastname}
                        <input 
                            placeholder="Last Name"
                            type="text"
                            name="lastname"
                            id="lastname"
                            className="input-login"
                            onChange={onChangeInput}
                            value={person.lastname}
                            />
                    </div>
                  
                </div>

                <div style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '10px'}}>
                        <button className="login-btn" onClick={() => {props.loginFunction()}}>
                                LOG IN
                        </button>
                </div>
               
            </div>
        </>
    )
}


export default Login