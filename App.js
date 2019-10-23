import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ContributorsList from './ContributorsList';

class App extends Component{
  componentDidMount(){
    fetch('https://api.github.com/repos/emberjs/core-notes/contributors', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => this.saveData(JSON.stringify(json)))
    .catch(error => console.error(error))
  }

  saveData = async(data) =>{
    try {
      await AsyncStorage.setItem("contributors", data)
    } catch (error) {
      console.log("something went wrong", error)
    }
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