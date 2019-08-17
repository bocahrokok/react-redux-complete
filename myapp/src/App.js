import React from 'react';
import Ninjas from './Ninjas';


function App() {
  state = {
    ninjas: [
      {name: 'Ryu', age : 30, belt: 'black', id:1},
      {name: 'Yoshi', age : 20, belt: 'green', id:2},
      {name: 'Crystal', age : 25, belt: 'black', id:3}
    ]
  }

  return (
    <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome </p>
        <Ninjas ninjas ={this.state.ninjas}/>
      
    </div>
  );
}

export default App;
