import { StyleSheet, View, Text } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOveriewScreen'
import IngredientScreen from './screens/IngredientsScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  // hellow
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{ title: 'Meal Category' }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ title: 'Meals Overview' }}
          />
          <Stack.Screen
            name="IngredientScreen"
            component={IngredientScreen}
            options={{ title: 'Ingredient And Steps' }}
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
