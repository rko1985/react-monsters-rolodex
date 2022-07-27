import { Component  } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 'h345khjsd4345'
        },
        {
          name: 'Frank',
          id: 'h345ks23hjsd4345'
        },
        {
          name: 'Jacky',
          id: 'h345khjsd4gsd345'
        },
        {
          name: 'Andrei',
          id: 'h345ksdghjsd4345'
        }
      ]
    }
  }

  render () {

    return (
      <div className="App">
        
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
                      <h1>{monster.name}</h1>
                  </div>;
          })
        }

      </div>
    );
    
  }
}

export default App;
