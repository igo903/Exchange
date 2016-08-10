import React,{
    Component,
    } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity

    } from 'react-native';


class NavTopBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titleText: "Bird's QuotationMain",
            bodyText: 'This is not really a bird nest.'
        };
    }

    render(){
        return (
            <View>
                <Text>Mon Title</Text>
            </View>
        );
    }
}

module.exports = NavTopBar;