import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'

function MealList({ items, navigation }) {
  function renderMealItem(itemData) {
    return (
      <MealItem
        id={itemData.item.id}
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
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
