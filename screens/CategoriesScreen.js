import { View, Text, FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  )
}

function CategoriesScreen() {
  for (let item of CATEGORIES) {
    console.log(item.title)
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  text: {},
})
