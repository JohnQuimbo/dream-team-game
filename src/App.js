import React from 'react';
import Team from './Team'
import { render } from '@testing-library/react';

class App extends React.Component {

  constructor(props){
    super(props);

  }
  
  render(){
    return (
      <div className="App">
        <Team name =  "Team 1" />
        <Team name = "Team 2" />
      </div>
    );
  }
}
//need to test an input and retrieve the stats of a player based on the search of the user

export default App;
