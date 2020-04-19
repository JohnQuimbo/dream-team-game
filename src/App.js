import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {

  constructor(props){
    super(props);

  }
  
  render(){
    return (
      <div className="App">
        <Team name =  "Team 1" />
      </div>
    );
  }
}


export default App;
