import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Productos from './vistas/productos';
import Productos_add from './vistas/productos_add';

const Stack = createNativeStackNavigator();


function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='productos' component={Productos} options={{
        title: "Listado de productos",
        headerTitleAlign: "center",
      }} />
      <Stack.Screen name='productos_add'component={Productos_add}/>
    </Stack.Navigator>
  )
}

function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

export default App;
