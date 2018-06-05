import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
	constructor (props){
		super(props);
		this.state = {
			todos:[
				{description: 'Book venue', isComplete: true},
					{description: 'Research tux rentals', isComplete: false},
						{description: 'Contact Florist', isComplete: false}
						]
			};
		}
	   render() {
     return (
       <div className="App">
        <ul>
		{ this.state.rodos.map (( todo, index) =>}
          <ToDo key= { index } />
          <ToDo  key = { index } description={ todo.description} isComplted ={ todo.isCompleted } />
          )}
        </ul>       
       </div>
     );
   }
 }

export default App;
