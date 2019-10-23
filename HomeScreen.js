import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ContributorsList from './ContributorsList';

class HomeScreen extends Component{

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
          <ContributorsList navigate={this.props.navigation.navigate} />
        </View>
      );
    }
  }
  
  export default HomeScreen;