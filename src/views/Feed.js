import React from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator  } from 'react-native';
import { Avatar, ListItem, Image } from 'react-native-elements';
import feed from '../data/Feed';

export default props => {

    function getFeedItem({ item }){
        return (
            <ListItem
                bottomDivider
                key={item.id} 
                containerStyle={{paddingVertical: 6, paddingHorizontal: 6}}
                onPress={ () => console.warn('clicked') }
            >   
                <Avatar source={{uri: item.avatarUrl}} rounded />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <Image
                        source={{ uri: item.photoUrl }}
                        style={{ width: 100, height: 100 }}
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
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        borderColor: 'red',
        borderWidth: 1,
        marginTop: 30,
    },
});