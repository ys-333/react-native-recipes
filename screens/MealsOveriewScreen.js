import { View, Text, FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

function MealsOverviewScreen({ navigation, route }) {
  const { categoryId } = route.params

  const mealList = MEALS.filter((meal) => meal.categoryIds.includes(categoryId))

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        ingredients={itemData.item.ingredients}
        steps={itemData.item.steps}
        navigation={navigation}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={mealList}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default MealsOverviewScreen
