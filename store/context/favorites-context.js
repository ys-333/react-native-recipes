import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealsIds] = useState([])

  function addFavorite(id) {
    console.log(id)
    setFavoriteMealsIds((prevState) => [...prevState, id])
  }

  function removeFavorite(id) {
    const updatedFavoriteIds = favoriteMealIds.filter((mealId) => mealId !== id)
    setFavoriteMealsIds(updatedFavoriteIds)
  }

  const defaultValue = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  }

  return (
    <FavoritesContext.Provider value={defaultValue}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
