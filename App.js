import { StyleSheet, View, Text, Button } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOveriewScreen'
import IngredientScreen from './screens/IngredientsScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: 'Meal Category',
              headerRight: () => {
                return (
                  <Button
                    onPress={() => console.log('you pressed the tap button')}
                    title="tap"
                    color="black"
                  />
                )
              },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId,
            //   }
            // }}
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
  first you need to import createNavigationStack and NavigationContainer

  const stack = createNavigationStack();
  <Stack.navigation>
    <Stack.screen  name="route-name-which should be unique" component={<Componentn/> options={}}/>
  </stack.navigate>

  and by default you get access to routes and navigation as props to component which is being used as screen

  and other wise you can use useRoute and useNavigation hooks which you can directly import from react-native/stack
*/
