
import {useState} from 'react'
const TwoWay = () => {
    const initialPersons = [
        {
            name: 'Ricky',
            age : '20'
        },
        {
            name : 'Rofi',
            age: '20'
        },
        {
            name: 'husnul',
            age: '20'
        }
    ]
    const initialPerson = {
        name : '',
        age : ''
    }

    // state penampung inputan
    const [person, setPerson] = useState(initialPerson)
    // data jamak
    const [persons, setPersons] = useState(initialPersons)


    const onChangeInput = (e) => {
        setPerson({
            ...person,
            // age : nilai
            // name : nilai
            [e.target.name] : e.target.value
        })
    }

    const addPerson = () => {
        setPersons([
            ...persons,
            person
        ])
        setPerson(initialPerson)
    }

    return (
        <>
        {
            persons.map(item => (
                <p>Nama saya : {item.name} Umur saya : {item.age}</p>
            ))
        }
         <div>
             <div>
                 <label htmlFor="name">Name</label>
                 <br/>
                 {person.name}
                 <br/>
                 <input 
                 type="text"
                 name="name"
                 id="name"
                 onChange={onChangeInput}
                 value={person.name}
                 />
             </div>
             <div>
                 <label htmlFor="age">Age</label>
                 <br/>
                 {person.age}
                 <br/>
                 <input 
                 type="number"
                 name="age"
                 id="age"
                 onChange={onChangeInput}
                 value={person.age}
                 />
             </div>
        </div> 
        <button onClick={addPerson}>Add Person</button>
        </>
    )
}


export default TwoWay