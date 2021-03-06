import {useState} from 'react'
import ShowCount from './showCount'
import Button from './Button'
const IncrementDecrement = () => {
    const [count , setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
       setCount(count - 1)
    }

    return (
        <>
            <ShowCount count={count}/>
            {/* <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button> */}

            <Button fungsi={decrement} tipe={"-"}/>
            <Button fungsi={increment} tipe={"+"}/>

            {
                count % 2 == 0 && count != 0 && <p>Angka genap</p>
            }
            {
                count % 2 != 0 && count != 0 && <p>Angka Ganjil</p>
            }
        </>
    )
}



export default IncrementDecrement