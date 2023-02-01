import { View, Text, FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    const onPressNavigationHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      })
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressNavigationHandler}
      />
    )
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
