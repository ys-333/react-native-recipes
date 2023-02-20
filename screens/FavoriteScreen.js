import { useSelector } from 'react-redux'

import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList/MealList'

const FavoriteScreen = () => {
  // const favorite = useContext(FavoritesContext)
  const favoriteIds = useSelector((state) => state.ids)

  const favoriteMeals = MEALS.filter((meal) => favoriteIds.includes(meal.id))

  return <MealList items={favoriteMeals} />
}

export default FavoriteScreen
