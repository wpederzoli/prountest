import React, { Component } from 'react';
import { Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class ContributorsList extends Component {
    state = {
        data: []
    }

    componentDidMount(){
       this.getData(); 
    }

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem("contributors")
          if(value !== null) {
            this.setState({ data: JSON.parse(value)});
          }
        } catch(e) {
            console.log("Can't get values, " , e)
        }
      }

    render(){
        return(
            <View style={{ marginTop: 10, marginBottom: 10, flex: 1 }}>
                <ScrollView style={{ marginHorizontal: 20, flex: 1 }}>
                    { this.state.data.length > 0 ? this.state.data.map(data =>
                        <View key={data.id} style={{ borderWidth: 2, borderColor: 'lightblue', marginTop: 5 }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri: data.avatar_url }} style={{ width: 50, height: 50, flex: 1 }} />
                                    <Text style={{ fontSize: 20, alignSelf: 'center', justifyContent: 'center', flex: 3, textAlign: 'center' }}>{data.login}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        ) : 
                        <Text>No contributors yet</Text> 
                    }
                </ScrollView>
            </View>
        );
    }
}

export default ContributorsList;