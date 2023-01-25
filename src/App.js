
import './App.css';
import NewFile from "./newFile";
import Nav from "./navBar/navBar";
import Product from './Product';
import Hello from './Hello';
import Events from './Events';
import Demo from './Demo';
import Student from './Student';
function App() {
  return (
    <div className="App">
      <h1>Hey Everyone</h1>
      <newFile/>
      <Nav/>
      <Product pid="201" pname="Mobile" price="12000"/>
      <Hello id={990} name="javed" />
      <Events/>
      <Demo/>
      <Student/>
      </div>
      
  );
}

export default App;
