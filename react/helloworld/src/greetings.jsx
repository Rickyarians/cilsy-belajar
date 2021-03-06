

const Greeting = (props) => {

    // console.log(props)
    return (
      <>
      <p>my name {props.name} and my age {props.age}</p>
      {/* <p>Hello World, I'm {Math.floor(Math.random() * 1000)} years old</p> */}
      </>
    )
}

export default Greeting