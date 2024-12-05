import { View, Text, StyleSheet } from 'react-native';

const MenuScreen = () => {

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Cart</Text>  
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default MenuScreen;
