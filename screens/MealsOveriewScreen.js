import { useLayoutEffect } from 'react'
import MealList from '../components/MealList/MealList'
import { CATEGORIES, MEALS } from '../data/dummy-data'

function MealsOverviewScreen({ navigation, route }) {
  const { categoryId } = route.params

  const mealList = MEALS.filter((meal) => meal.categoryIds.includes(categoryId))

  const catId = route.params.categoryId

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)
      .title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  return <MealList items={mealList} navigation={navigation} />
}

export default MealsOverviewScreen
