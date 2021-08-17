import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments, faHeart, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

export default props => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../images/insta-logo.png')}
                />

                <View style={styles.iconsTop}>
                    <FontAwesomeIcon icon={faPlusSquare} size={24} />
                    <FontAwesomeIcon icon={faHeart} size={24} />
                    <FontAwesomeIcon icon={faComments} size={24} />
                </View>

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    b: {
        borderWidth: 1,
        borderColor: 'red',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    iconsTop: {
        paddingLeft: 70,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
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