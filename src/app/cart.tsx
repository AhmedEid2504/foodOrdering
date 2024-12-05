import { View, Text, Platform, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '@/components/Button';

const CartScreen = () => {

    return (
        <View style={{ padding: 10 }}>

        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>
            Total:
        </Text>
        <Button  text="Checkout" />

        </View>
    );
};

export default CartScreen;