import Greeting from './greetings'
import {useState} from 'react'
const GreetingState = () => {


    const initialState = [
        {
            name: "michael", 
            age: 20
        },
        {
            name: "ricky", 
            age: 19
        }
    ]


    const [person, setPersons] = useState(initialState)

    return (
        <>
            {/* <Greeting name={person[0].name} age={person[0].age}/>
            <Greeting name={person[1].name} age={person[1].age}/> */}

            {
                person.map(item => (
                    <Greeting name={item.name} age={item.age}/>
                ))
            }
        </>
    )
}


export default GreetingState