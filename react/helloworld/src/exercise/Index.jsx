


import {useState, useEffect} from 'react'
import './style.scss'
import Register from './component/Register'
import Login from './component/Login'
const Index = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [isHomepage, setIsHomepage] = useState(false)

    // const changeLayout = (value) => {
    //     setIsLogin(value)
    // }

    const loginFunction = ()  => {
        setIsHomepage(true)
    }
 
    
    return (
        <>
        {
        isHomepage == false &&
                  
        <div style={{width: '100%', height: '750px', position: 'absolute', zIndex: -999, paddingTop: '20px'}} className="logo" >
            

             <div className="card" style={{minHeight: '300px'}}>
                <div className="card-btn">
                    <div className="card-btn-child" style={{backgroundColor: '#FABB7C', color: 'white', cursor: 'pointer'}} onClick={() => {setIsLogin(false)}}>
                        SIGN UP
                    </div>
                    <div className="card-btn-child" style={{backgroundColor: '#000', color: 'white', cursor: 'pointer'}} onClick={ () => {setIsLogin(true)}}>
                        LOGIN
                    </div>
                </div>

                 <div>
                     {
                        isLogin == false &&  <Register></Register>
                     }
                     {
                         isLogin == true && <Login loginFunction={loginFunction}/>
                     }
                  
                   
                 </div>
             </div>
        </div>
        }
        {
           isHomepage == true && <div>homepage</div>
        }
       
        </>
    )
}


export default Index