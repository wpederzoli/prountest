import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

class ContributorProfile extends Component{

    state = {
        profile: []
    }
    componentDidMount(){
        const { navigation } = this.props;
        let url = navigation.getParam('url');
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => this.setState({ profile: json }))
        .catch(e => console.error(e))    
    }

    render(){
        return( 
            this.state.profile.length < 1  ? <Text>Loading...</Text> :
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <Image source={{ uri: this.state.profile.avatar_url }} 
                            style={{ width: 250, height: 250, borderWidth: 5, borderRadius: 5, borderColor: 'lightblue', marginTop: 25, alignSelf: 'center' }} 
                        />
                        <Text style={{ fontSize: 20, alignSelf: 'center' }}>@{this.state.profile.login}</Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}>{this.state.profile.name}</Text>
                        <Text style={{ fontSize: 20, alignSelf: 'center' }}>{this.state.profile.location}</Text> 
                    </ScrollView> 
                </View> 
        );
    }
}

export default ContributorProfile;