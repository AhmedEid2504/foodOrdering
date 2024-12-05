import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import products from '@assets/data/products';
import { Stack } from 'expo-router';
import Button from '@components/Button';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetail = () => {
    const [selectedSize, setSelectedSize] = useState(sizes[1]);

    const { id } = useLocalSearchParams();
    const product = products.find((product) => product.id.toString() === id);
    
    const addToCart = () => {
        alert(`Added ${product.name} to cart in size ${selectedSize}`);
    }

    if (!product) {
        return (
            <View style={styles.wrapper}>
                <Stack.Screen 
                    options={{ title: 'Product Detail' }}
                />
                <View style={styles.container}>
                    <Text>Product not found</Text>
                </View>
            </View>
        );
    }
    
    return (
        <View style={styles.wrapper}>
            <Stack.Screen 
                options={{ title: product ? product.name : 'Product Detail' }}
            />
            <View style={styles.container}>
                <Image 
                    style={styles.image} 
                    source={{ uri: product.image }} 
                    resizeMode='contain'
                />
                <Text style={{ fontSize: 20 }}>Select Size</Text>
                <View style={styles.sizes}>
                    {sizes.map((size) => (
                        <Pressable 
                            key={size}
                            style={{
                                ...styles.size,
                                backgroundColor: size === selectedSize ? 'orange' : 'white',
                            }}
                            onPress={() => setSelectedSize(size)}
                        >
                            <Text 
                                style={{
                                    ...styles.sizeText,
                                    color: size === selectedSize ? 'red' : 'black',
                                }}
                            >
                                {size}
                            </Text>
                        </Pressable>
                    ))}
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.title}>${product.price}</Text>
                    <Button 
                        text="Add to cart" 
                        onPress={addToCart}
                    />
                </View>
            </View>
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
        padding: 10,
        width: '100%',
        justifyContent: 'space-around',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10,
        padding: 10,
    },
    size: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        borderColor: 'darkorange',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomContainer: {
        padding: 10,
        alignItems: 'center',
    },
});

export default ProductDetail;