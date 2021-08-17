import React from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator, Dimensions} from 'react-native';
import { Avatar, ListItem, Image } from 'react-native-elements';
import feed from '../data/Feed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments, faHeart } from '@fortawesome/free-regular-svg-icons';

const dimensions    = Dimensions.get('window');
const imageHeight   = Math.round(dimensions.width * 9 / 16);
const imageWidth    = dimensions.width;

export default props => {

    function getFeedItem({ item }){
        return (
            <ListItem
                bottomDivider
                key={item.id} 
                containerStyle={{paddingVertical: 6, paddingHorizontal: 0, flex: 1}}
                onPress={ () => console.warn('clicked') }
            >   
                <ListItem.Content>
                    <View style={styles.feedInfo}>
                        <Avatar 
                            source={{uri: item.avatarUrl}} 
                            rounded
                            containerStyle={{marginLeft: 5}}
                        />
                        <ListItem.Title style={styles.author}>{item.name}</ListItem.Title>
                    </View>
                    
                    <Image
                        source={{ uri: item.photoUrl }}
                        style={{ height: imageHeight, width: imageWidth }}
                        PlaceholderContent={<ActivityIndicator />}
                    />

                    <View style={styles.actionButtons}>
                        <FontAwesomeIcon icon={faHeart} size={24} style={{marginHorizontal: 10, marginVertical: 5}} />
                        <FontAwesomeIcon icon={faComments} size={24} />
                    </View>
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
                ListFooterComponent={<View style={{height: 220}}/>}
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
    actionButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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