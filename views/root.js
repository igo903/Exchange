import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TabBarIOS,
  NavigatorIOS,
  Navigator

} from 'react-native';


var HomeMain = require('./home/homeMain');
var QuotationMain = require('./quotation/quotationMain');
var TradingHallMain = require('./hall/tradingHallMain');
var MyCenter = require('./my/myCenter');

var css = require('./styles/commonCss');

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''}
  }

    select(tabCode,tabName) {
        this.setState({
            tab:tabCode,
            title:tabName
        })
    }



  render() {
    return (
      <View style={css.flex}>
          <StatusBar
              backgroundColor="red"
              barStyle="light-content"
          />
      <NavigatorIOS barTintColor = "#1B2128"
        initialRoute={{
          component: HomeIndex,
          titleTextColor: "#fff",
          title:'kkk'
        }}
        style={css.flex}
      />
      </View>
    );
  }
};


class HomeIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tab: 'homePage'}

  }

  select(tabCode,tabName) {
    this.setState({
        tab:tabCode,
        title:tabName
    })
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
