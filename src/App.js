import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Header from './views/Header';
import Stories from './views/Stories';
import Feed from './views/Feed';

export default class App extends React.Component {

    render(){
        return (
            <SafeAreaView>
                <Header />
                <Stories />
                <Feed />
            </SafeAreaView>
        );
    }

}