import { View, ScrollView, StyleSheet } from 'react-native';
import products from '@/assets/data/products';
import ProductItem from '@/src/components/ProductItem';

const MenuScreen = () => {

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {products.map((product) => (
          <ProductItem 
            key={product.id} 
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </ScrollView>
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
