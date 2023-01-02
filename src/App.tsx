// import { Component  } from 'react';

import { useState, useEffect, ChangeEvent } from 'react'; //hooks

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/fetch.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  
  const [searchField, setSearchField] = useState('a');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  
  
  console.log("rendered");

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);

  }, [monsters, searchField]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
        );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
    
  }

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString)
    
  }
  
  return (
    <div className="App">
        
        <h1 className='app-title'>{title}</h1>

        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box'
        />
        <br/>
        <SearchBox 
          onChangeHandler={onTitleChange} 
          placeholder='set title' 
          className='title-monsters-search-box'
        />



        <CardList monsters={filteredMonsters}/>
      </div>
  )

}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
    
//   }

  // componentDidMount(){
    
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => 
  //       this.setState(
  //         () => {
  //           return {monsters: users};
  //         }
  //       )
  //     );
        
  // }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
   
//     this.setState(() => {
//       return { searchField };
//       }
//     );
//   }

//   render () {
//     console.log('render from appJS');

//     //allows you to remove this 
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });


//     return (
//       <div className="App">
        
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder='search-monsters' 
//           className='monsters-search-box'
//         />

//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
    
//   }
// }

export default App;
