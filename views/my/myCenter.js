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

class MyCenter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	      titleText: "Bird's MyCenter",
	      bodyText: 'This is not really a bird nest.'
	    };
	}

	render(){
		return (
			<View style={[css.appBg,css.flex,css.headerMarginTop]}>
				<View style={[css.myArea]}>

					<TouchableOpacity
						style={[css.submitBtn]}
						underlayColor='#fff'>
						<Text style={[css.submitBtnTxt]}>登录</Text>
					</TouchableOpacity>
				</View>






			</View>

	    );
	}
}

module.exports = MyCenter;