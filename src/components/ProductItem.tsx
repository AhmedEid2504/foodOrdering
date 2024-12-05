import { View, Text, StyleSheet, Image } from 'react-native';
import products from '@/assets/data/products';

type Product = {
    name: string;
    image: string;
    price: number;
};

const ProductItem = (
    Product: Product
) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: Product.image }} style={{ width: 200, height: 200 }} />
            <Text style={styles.title}>{Product.name}</Text>
            <Text style={styles.title}>{Product.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
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

export default ProductItem;
