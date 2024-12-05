import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from '@components/ProductItem';
import products from '@assets/data/products';
const MenuScreen = () => {

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={products}
        style={styles.container}
        renderItem={({ item }) => 
        <ProductItem 
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
        />}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
});

export default MenuScreen;
