import { Text, View } from 'react-native'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { FlatList } from 'react-native-gesture-handler'

const FavoriteScreen = () => {
  const favorite = useContext(FavoritesContext)

  return (
    <View style={{ backgroundColor: 'white' }}>
      <FlatList
        data={favorite.ids}
        renderItem={(itemData) => <Text>{itemData.item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

export default FavoriteScreen
