import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TabBarIOS,
  NavigatorIOS,
  Navigator

} from 'react-native';


var HomeMain = require('./home/homeMain');
var QuotationMain = require('./quotation/quotationMain');
var TradingHallMain = require('./hall/tradingHallMain');
var MyCenter = require('./my/myCenter');

var css = require('./styles/commonCss');


var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        console.log(index)
        if(index > 0) {
            return (
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => { if (index > 0) { navigator.pop() } }}>
                    <Text style={ css.leftNavButtonText }>Back</Text>
                </TouchableHighlight>)
        }
        else { return null }
    },
    RightButton(route, navigator, index, navState) {
        if (route.onPress) return (
            <TouchableHighlight
                onPress={ () => route.onPress() }>
                <Text style={ css.rightNavButtonText }>
              { route.rightText || 'Right Button' }
                </Text>
            </TouchableHighlight>)
    },
    Title(route, navigator, index, navState) {
        if(index == 0){
            return <Text style={ css.title }>{route.title}</Text>
        }

    }
};


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''}
  }

    renderScene(route, navigator) {
        if(route.name == 'TabBarFooter') {
            return <TabBarFooter navigator={navigator} {...route.passProps}  />
        }
    }



  render() {
    return (
      <View style={css.flex}>
          <StatusBar
              backgroundColor="red"
              barStyle="light-content"
          />
          <Navigator
              style={[css.flex]}
              initialRoute={{ title: '数据权益', index: 0, name:'TabBarFooter' }}
              //renderScene={(route, navigator) => <TabBarFooter></TabBarFooter>}
              renderScene={this.renderScene}

              //navigationBar={
              //    <Navigator.NavigationBar
              //        routeMapper={ NavigationBarRouteMapper }
              //        style={[css.topNavBar]}
              //    />
              //    }


          />

      </View>
    );
  }
};


class TabBarFooter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tab: 'homePage'}

  }

  select(tabCode,tabName) {
    this.setState({
        tab:tabCode,
        title:tabName
    })
      console.log(tabName)
  }



  render() {
    return (
      <TabBarIOS tintColor = "#058BFD" barTintColor = "#13161A" >
        <TabBarIOS.Item
                    title = "首页"
                    icon = {require('image!home_tabbar_icon')}
                    onPress={this.select.bind(this,'homePage','首页')}
                    selected = {this.state.tab === 'homePage'}
        >
        <HomeMain navigator = {this.props.navigator}></HomeMain>
        </TabBarIOS.Item>

        <TabBarIOS.Item
                    title = "行情"
                    icon={require('image!qutotation_tabbar_icon')}
                    onPress={this.select.bind(this,'quotation','行情')}
                    selected = {this.state.tab ==='quotation'}
        >
        <QuotationMain navigator = {this.props.navigator}></QuotationMain>
        </TabBarIOS.Item>

        <TabBarIOS.Item
                    title = "交易大厅"
                    icon = {require('image!exchange_tabbar_icon')}
                    onPress={this.select.bind(this,'enTrustTrading','交易大厅')}
                    selected = {this.state.tab ==='enTrustTrading'}
        >
        <TradingHallMain navigator = {this.props.navigator}></TradingHallMain>
        </TabBarIOS.Item>

        <TabBarIOS.Item
                    title = "我的"
                    icon = {require('image!my_tabbar_icon')}
                    onPress={this.select.bind(this,'myAccount','我的')}
                    selected = {this.state.tab ==='myAccount'}
        >
        <MyCenter navigator = {this.props.navigator}></MyCenter>
        </TabBarIOS.Item>


      </TabBarIOS>
    )
  }
}


module.exports = Root;
