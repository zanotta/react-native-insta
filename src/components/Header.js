import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default props => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../images/insta-logo.png')}
                />

                <View style={styles.container}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <FontAwesomeIcon icon={faPlusSquare} />
                </View>

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    header: {
        height: 50,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
    },
    logo: {
        width: 125,
        height: 45,
    }
});