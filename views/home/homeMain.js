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
import Swiper from 'react-native-swiper';
import ResponsiveImage from 'react-native-responsive-image';

var css = require('./../styles/commonCss');
var funPool = {}
funPool['msgCenter'] = require('./msgCenter');
funPool['coinBuy'] = require('./coinBuy');
funPool['coinSell'] = require('./coinSell');
funPool['transLookup'] = require('./transLookup');



class HomeMain extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	      titleText: "Bird's HomeMain",
	      bodyText: 'This is not really a bird nest.'
	    };
	}

	iconPortGoTo(funcCode,funcName){
        this.props.navigator.push({
          component:funPool[funcCode],
          title:funcName
        })
	}

	render(){
		return (
			<ScrollView style={[css.appBg]}>
			<View >
				<Swiper height={180} showsButtons={false} autoplay = {true}>
					<View style={css.flex}>
						<Image style={css.fullImg}
							source={require('./../../img/b1.png')}
						/>

					</View>
					<View style={css.flex}>
						<Image style={css.fullImg}
							source={require('./../../img/b12x.png')}
						/>
					</View>
					<View style={css.flex}>
						<Image style={css.fullImg}
							source={require('./../../img/b1.png')}
						/>
					</View>
				</Swiper>

				<View style={[css.row,css.iconPortArea]}>
					<View style={css.center}>
						<TouchableOpacity onPress={this.iconPortGoTo.bind(this,"msgCenter","消息中心")}>
							<Image source = {require("image!msg_icon")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt}>消息中心</Text>
					</View>

					<View style={css.center}>
						<TouchableOpacity onPress={this.iconPortGoTo.bind(this,"coinBuy","积分买入")}>
							<Image source = {require("image!buy_icon")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt} >积分买入</Text>
					</View>

					<View style={css.center}>
						<TouchableOpacity onPress={this.iconPortGoTo.bind(this,"coinSell","积分卖出")}>
  							<Image source = {require("image!sell_icon")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt} >积分卖出</Text>
					</View>

					<View style={css.center}>
						<TouchableOpacity onPress={this.iconPortGoTo.bind(this,"transLookup","交易查询")}>
							<Image source = {require("image!lookup_icon")} style={css.iconPort}></Image>
						</TouchableOpacity>
						<Text style={css.portTxt} >交易查询</Text>
					</View>
				</View>



				<View style={css.sectionBg}>
					<Text style={{marginTop:12,marginLeft:10,marginBottom:12,color:'#76787A'}}>积分优惠活动</Text>
					<View style={[css.row,css.promosContainer]}>



						<View style={[css.promoCell,css.center]}>
							<Image source={require('./../../img/a2.png')} style={css.promoCellImg}></Image>
						</View>
						<View style={[css.promoCell,css.center]}>
							<Image source={require('./../../img/a2.png')}  style={css.promoCellImg} ></Image>
						</View>


					</View>

				</View>


      	</View>
			</ScrollView>

		);
	}
}




module.exports = HomeMain;
