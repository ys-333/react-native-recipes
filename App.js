import { StyleSheet, View, Text } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOveriewScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  // hellow
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
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
