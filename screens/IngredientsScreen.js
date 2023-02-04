import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

function IngredientScreen({}) {
  const route = useRoute()
  const { ingredients, steps } = route.params

  return (
    <View style={styles.screen}>
      <View style={styles.ingredient}>
        <Text style={styles.title}>Ingredients Screen</Text>
        <FlatList
          data={ingredients}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 18,
              }}
            >
              <Text
                style={{
                  marginRight: 8,
                  width: 4,
                  height: 4,
                  backgroundColor: 'white',
                  borderRadius: 14,
                }}
              ></Text>
              <Text style={styles.list}>{item}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.step}>
        <Text style={styles.title}>Steps:</Text>
        <FlatList
          data={steps}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 18,
              }}
            >
              <Text
                style={{
                  marginRight: 8,
                  width: 4,
                  height: 4,
                  backgroundColor: 'white',
                  borderRadius: 14,
                }}
              ></Text>
              <Text
                style={{
                  fontSize: 14,
                  marginRight: 4,
                  color: 'grey',
                  marginBottom: 6,
                }}
              >
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default IngredientScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginBottom: 8,
    marginTop: 12,
    textAlign: 'center',
  },
  ingredient: {
    borderRadius: 8,
    backgroundColor: '#f5428d',
    elevation: 4,
    marginBottom: 10,
    paddingBottom: 8,
  },
  step: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#ffc7ff',
    elevation: 4,
    alignItems: 'center',
    padding: 8,
  },
  list: {
    fontSize: 16,
    color: 'white',
    marginBottom: 6,
  },
})
