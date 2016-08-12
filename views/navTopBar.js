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

var css = require('./styles/commonCss');

class NavTopBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titleText: "Bird's QuotationMain",
            bodyText: 'This is not really a bird nest.'
        };

        this.props.title = this.props.title||"";
        this.props.leftBlock=this.props.leftBlock||null;
        this.props.rightBlock=this.props.rightBlock||null;
        this.props.backgroundColor=this.props.backgroundColor||null;
        this.props.translucent = this.props.translucent||false;

        /** nav style config**/
        this._navStyle  = {}
        if(this.props.backgroundColor)
            this._navStyle.backgroundColor = this.props.backgroundColor;
        if(this.props.translucent)
            this._navStyle.backgroundColor = "transparent";


    }


    _goBack(){
        this.props.navigator.pop();
    }
    _leftBlock(){
        if(this.props.leftBlock == null)
        {
            return(
                <Text style={css.navBlockFont}></Text>
            )
        }
        else{
            return this.props.leftBlock;
        }
    }
    _rightBlock(){
        if(this.props.rightBlock==null)
        {
            return(
                <Text style={css.navBlockFont}>&nbsp;</Text>
            )
        }
        else{
            return this.props.rightBlock;
        }
    }

    render(){
        return (
            <View style={[css.view,css.navigator,this._navStyle ]}>
                <View style={[css.navLeftBlock,css.flex]}>
                    {this._leftBlock()}
                </View>
                <View style={[css.navMainBlock,{flex:2}]}>
                    <Text style={css.navMainFont}>{this.props.title}</Text>
                </View>
                <View style={[css.navRightBlock,css.flex]}>
                    {this._rightBlock()}
                </View >
            </View>
        );
    }
}

module.exports = NavTopBar;