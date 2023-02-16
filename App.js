import 'react-native-gesture-handler'
import { StyleSheet, View, Text, Button } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MealsOverviewScreen from './screens/MealsOveriewScreen'
import IngredientScreen from './screens/IngredientsScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import { Ionicons } from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      {/* <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#3f2f25',
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                headerRight: ({ navigation }) => {
                  return (
                    <Button
                      title="tap"
                      onPress={() => console.log(navigation)}
                      // color="black"
                    />
                  )
                },
              }}
            />
            <Stack.Screen
              name="IngredientScreen"
              component={IngredientScreen}
              options={{
                title: 'Ingredient And Steps',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {},
})

/*
  first you need to import createNavigationStack and Navigation0.Container

  const stack = createNavigationStack();
  <Stack.navigation>
    <Stack.screen  name="route-name-which should be unique" component={<Componentn/> options={}}/>
  </stack.navigate>

  and by default you get access to routes and navigation as props to component which is being used as screen

  and other wise you can use useRoute and useNavigation hooks which you can directly import from react-native/stack
*/
