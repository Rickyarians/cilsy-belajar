// import logo from './logo.svg';
import './App.css';
import './greetings'
// import Greeting from './greetings';
import GreetingState from './stateGreeting'
import Heading from './Heading'
import HandlingEvent from './handlingEvent'
import OnChangePersons from './manipulatingState'
import IncrementDecrement from './incdec'
import TwoWay from './twoway'

function App() {
  return (
    <>
      {/* <HandlingEvent/>
      <OnChangePersons/> */}
      {/* <IncrementDecrement/> */}
      <TwoWay />
    </>
  )
}

export default App;
