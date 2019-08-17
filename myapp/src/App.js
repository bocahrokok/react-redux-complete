import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'black', id:1},
      {name: '', age: 20, belt: 'black', id:1},
      {name: 'Ryu', age: 30, belt: 'black', id:1},
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>welcome</p>
        <Ninjas ninjas= {this.state.ninjas}/>

      </div>
    );
  }
}


export default App;
