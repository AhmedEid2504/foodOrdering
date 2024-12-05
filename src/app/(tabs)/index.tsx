import { View, Text, StyleSheet } from 'react-native';
import products from '@/assets/data/products';
import ProductItem from '@/src/components/ProductItem';

const MenuScreen = () => {
  return (
    <View style={styles.wrapper}>
      {products.map((product) => (
        <ProductItem 
          key={product.id} 
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
