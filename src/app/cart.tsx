import { View, Text, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {  useCart } from '@/providers/CartProvider';
import Button from '@/components/Button';

const CartScreen = () => {
    const { items } = useCart();

    return (
        <View style={{ padding: 10 }}>
            <Text>cart item length: {items.length}</Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
        </View>
    );
};

export default CartScreen;