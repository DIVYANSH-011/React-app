import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Message from "./components/message"
import Counter from "./components/counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
function App() {
  return (
    <div className="App">
      {/* <FunctionClick />
      <ClassClick />
      <EventBind /> */}
      <ParentComponent />

      {/* <Counter />
      {/* <Message /> */}
       {/* <Greet name = 'lamba'heroname = "paddu" >
        <p>This is children prop</p>
      </Greet>
      <Greet name = 'divyansh'heroname = "captain america" >
        <button>Action</button>
      </Greet>  */}
      {/* <Greet name = 'who care'heroname = "who cares"  />
      <Welcome name = "divyansh" heroname = "singh "> </Welcome>
      <Hello />  */}
    </div>
  );
}

export default App;
