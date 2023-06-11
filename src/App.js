import './App.css';
import {useState } from "react";

function App() {
	const [counter , setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
	  <table>
	  <tr>
	  	<td>
	  		Counter Value: 
	  	</td>
	  	<td>
	  		{counter}
	  	</td>
	  </tr>
	  <tr>
	  	<td>
	  		<button onClick={()=> setCounter(counter + 1)}>Increment</button>
	  	</td>
	  	<td>
	  		<button onClick={()=> {if ( counter > 0 ) setCounter(counter - 1);}}>Decrement</button>
	  	</td>
	  </tr>
	  </table>
      </header>
    </div>
  );
}

export default App;
