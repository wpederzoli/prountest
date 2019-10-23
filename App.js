import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ContributorsList from './ContributorsList';

class App extends Component{
  state = {
    data: ""    
  };

  componentDidMount(){
    fetch("https://api.github.com/repos/emberjs/core-notes/contributors",{
      method: 'GET'
    })
    .then(response => response.json())
    .then(json =>{
      this.setState({data: JSON.stringify(json)})
    }).catch(error => console.error(error))
  }

  render(){
    return(
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'lightblue', padding: 20 }}>
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>Contribuidores de Ember.js</Text>
        </View>
        <ContributorsList />
      </View>
    );
  }
}

export default App;