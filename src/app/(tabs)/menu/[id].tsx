import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import products from '@assets/data/products';
import { Stack } from 'expo-router';


const ProductDetail = () => {

    const { id } = useLocalSearchParams();

    return (
        <View style={styles.wrapper}>
            <Stack.Screen 
                options={{ title: 'Details ' + id }}
            />
            <View style={styles.container}>
                <Text>Product Detail: {id}</Text>
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
        width: '100%',
    },
});

export default ProductDetail;