import logo from './logo.svg';
import './App.css';
import Redux from './Components/Redux/Redux';
import Display from './Components/Redux/Display';
import Input from './Components/Redux/Todolist/Input';
function App() {
  return (
    <div className="App">
      {/* <Redux/>
      <Display/> */}
      <Input/>
    </div>
  );
}

export default App;
