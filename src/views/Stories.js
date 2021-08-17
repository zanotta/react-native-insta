import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import stories from '../data/Stories';

export default props => {

    function getStories({ item }) {
        return (
            <ListItem
                key={item.id} 
                containerStyle={{backgroundColor: 'inherit', paddingVertical: 6, paddingHorizontal: 6}}
                onPress={ () => console.warn('clicked') }
            >   
                <Avatar 
                    rounded 
                    containerStyle={{borderWidth: 3, borderColor: '#8e44ad'}}
                    size={"medium"} 
                    source={{ uri: item.avatarUrl}} 
                />
            </ListItem>
        );
    }

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size={"medium"}
                source={{ uri: 'https://rodrigozanotta.com.br/assets/images/me.jpg'}}
            >
                <Avatar.Accessory
                    name="user"
                    type="font-awesome"
                    size={25}
                    color={'blue'}
                />
            </Avatar>

            <FlatList
                style={styles.storiesContainer}
                keyExtractor={stories => stories.id.toString()}
                data={stories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={getStories}
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
    storiesContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        marginTop: 8
    },
    storiesAvatar: {
        borderWidth: 1,
        borderColor: 'red',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        paddingTop: 30,
        paddingLeft: 10,
        height: 60
    },
});