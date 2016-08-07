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


class QuotationMain extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	      titleText: "Bird's QuotationMain",
	      bodyText: 'This is not really a bird nest.'
	    };
	}

	render(){
		return (
	      <Text>{this.state.titleText}</Text>
	    );
	}
}

module.exports = QuotationMain;