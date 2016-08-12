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

var css = require('./../styles/commonCss');
var NavTpl = require('./../navTopBar');

var funPool = {}
funPool['transLookup'] = require('./../home/transLookup');



class MyCenter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	      titleText: "Bird's MyCenter",
	      bodyText: 'This is not really a bird nest.'
	    };
	}

	goFunc(funcCode,funcName){
		this.props.navigator.push({
			component:funPool[funcCode],
			title:funcName
		})
	}

	render(){
		return (
			<View style={css.flex}>
			<NavTpl title = {'Alain'}></NavTpl>

			<ScrollView style={[css.appBg]}>
			<View>
				<View style={[css.myArea]}>

					<TouchableOpacity onPress={ this.goFunc.bind(this,"transLookup","交易查询")}
						style={[css.submitBtn]}
						underlayColor='#fff'>
						<Text style={[css.submitBtnTxt]}>登录</Text>
					</TouchableOpacity>
				</View>
			</View>
			</ScrollView>

			</View>
	    );
	}
}

module.exports = MyCenter;