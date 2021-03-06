import {useState} from 'react'

const OnChangePersons = () => {
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
    const changePerson = () => {
        setPersons([
            { name : 'kesya', age: 21},
            { name : 'Adi', age : 19},
            { name : 'Silvy', age: 22}
        ])
    }

    return (
        <>
        {
            person.map(item => (
                <p>nama saya{item.name} umur saya  {item.age}</p>
            ))
        }

        <button onClick={changePerson}>Ganti State</button>
        </>
    )
}



export default OnChangePersons