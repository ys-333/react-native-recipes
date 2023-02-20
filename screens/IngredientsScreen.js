import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  LogBox,
} from 'react-native'
import { useEffect, useLayoutEffect, useContext } from 'react'
// import { FavoritesContext } from '../store/context/favorites-context'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/store'

import MealDetails from '../components/MealDetails'
import IconButton from '../components/IconButton'

function IngredientScreen({ routes, navigation }) {
  const route = useRoute()
  const {
    id,
    ingredients,
    steps,
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
  } = route.params

  // const favorite = useContext(FavoritesContext)

  const favoritedIds = useSelector((state) => state.ids)
  const dispatch = useDispatch()

  const mealIsFavorite = favoritedIds.includes(id)

  console.log(id, mealIsFavorite, favoritedIds)

  function headerRightButtonHandler() {
    // todo when even we pressed the star, we have to trigger the addFavorite function using useContext ;
    //todo for that we need id of the meal we want to save

    // we decide whether meal is favorite or not by mealIsFavorite variable

    if (mealIsFavorite) {
      dispatch(removeFavorite({ id }))
    } else {
      dispatch(addFavorite({ id }))
    }
  }

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [mealIsFavorite])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={headerRightButtonHandler}
          />
        )
      },
    })
  }, [navigation, headerRightButtonHandler])

  return (
    <ScrollView style={{ flex: 1, marginBottom: 32 }}>
      <View style={styles.screen}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 12,
            borderRadius: 6,
            elevation: 4,
          }}
        >
          <Image
            style={{
              height: 200,
              width: ' 90%',
              marginVertical: 12,
              marginLeft: 12,
              borderRadius: 8,
              borderWidth: 0.6,
              borderColor: 'yellow',
            }}
            source={{ uri: imageUrl }}
          />
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
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
    </ScrollView>
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
