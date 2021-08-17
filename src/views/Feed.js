import React from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator, Dimensions  } from 'react-native';
import { Avatar, ListItem, Image } from 'react-native-elements';
import feed from '../data/Feed';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default props => {

    function getFeedItem({ item }){
        return (
            <ListItem
                bottomDivider
                key={item.id} 
                containerStyle={{paddingVertical: 6, paddingHorizontal: 0}}
                onPress={ () => console.warn('clicked') }
            >   
                <ListItem.Content>
                    <View style={styles.feedInfo}>
                        <Avatar source={{uri: item.avatarUrl}} rounded />
                        <ListItem.Title style={styles.author}>{item.name}</ListItem.Title>
                    </View>
                    
                    <Image
                        source={{ uri: item.photoUrl }}
                        style={{ height: imageHeight, width: imageWidth }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View style={styles.container}>
            
            <FlatList
                keyExtractor={feed => feed.id.toString()}
                data={feed}
                renderItem={getFeedItem}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    b: {
        borderWidth: 1,
        borderColor: 'red',
    },
    author: {
        fontSize: 14,
        paddingLeft: 10,
    },
    feedInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    feedContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    container: {
        marginTop: 30,
    },
});