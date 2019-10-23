
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';

const MainNavigator = createStackNavigator({
  Home: 
    {
      screen: HomeScreen,
      navigationOptions: { 
        title: 'Contribuidores Ember.js',
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1
        },
      }
    }
})

const App = createAppContainer(MainNavigator);

export default App;