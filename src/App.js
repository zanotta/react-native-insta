import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {

    render(){
        return (
            <SafeAreaView>
                <Header />
            </SafeAreaView>
        );
    }

}