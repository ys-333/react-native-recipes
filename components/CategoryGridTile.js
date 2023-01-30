import { View, Text, Pressable, StyleSheet } from 'react-native'

function CategoryGridTile({ title, color }) {
  const onPressHandler = () => {
    console.log('we are getting pressed')
  }
  return (
    <View style={styles.gridItem}>
      <Pressable onPress={onPressHandler}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}
export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 6,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
  },
})
