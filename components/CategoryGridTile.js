import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={(pressedData) => [
          { opacity: pressedData.pressed ? 0.8 : 1 },
          styles.button,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
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
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.select({ android: 'hidden' }),
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
