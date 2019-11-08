import Home from './Home'
import Description from './Detalhes'
import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: Home},
  Description: { screen: Description}

},
{ headerLayoutPreset: 'center' });

export default createAppContainer(App);