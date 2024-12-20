import { Pressable, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/defaut.png';



type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
};

const ProductItem = (
    Product: Product
) => {
    return (
        <Link
            href={`/menu/${Product.id}`}
            asChild
        >
            <Pressable style={styles.container}>
                <Image 
                    style={styles.image} 
                    source={{ uri: Product.image || defaultPizzaImage }} 
                    resizeMode='contain'
                />
                <Text style={styles.title}>{Product.name}</Text>
                <Text style={styles.title}>{Product.price}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        maxWidth: '50%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
});

export default ProductItem;
