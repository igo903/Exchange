import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

var appBgColor = "#13161A";
var topNavBarBg = "#1b2128";
var sectionBgColor = '#1C1F22';
var fullWidth = Dimensions.get('window').width;

var appCSS = StyleSheet.create({
    flex:{flex:1},
    row:{flexDirection:'row'},
    col:{flexDirection:'column'},

    topNavBar:{
        flex:1,
        backgroundColor:topNavBarBg,
        justifyContent:"center",
        alignItems:"center"
    },



    navLeftBlock:{
        justifyContent:"flex-end",
        alignItems:"flex-start",
        paddingLeft:10
    },
    navRightBlock:{
        justifyContent:"flex-end",
        alignItems:"flex-end",
        paddingRight:10
    },
    navMainBlock:{
        justifyContent:"flex-end",
        alignItems:"center",
    },
    navBlockFont:{
        fontSize:16,
        color:"#fff"
    },
    navMainFont:{
        fontSize:17,
        color:"#fff",
        fontWeight:"bold"

    },
    navigator:{
        height:64,
        paddingTop:20,
        paddingBottom:10,
        flexDirection:"row",
        backgroundColor:topNavBarBg
    },





    headerMarginTop:{
        marginTop:44
    },

    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    title:{
        color:"#fff",
        fontSize:18,
        marginTop:12,
        fontWeight: 'bold',
        justifyContent:"center",
        alignItems:"center"
    },

    submitBtn:{
        height:42,
        width:141,
        backgroundColor:'#058BFD',
        borderRadius:2,
        justifyContent:"center",
        alignItems:"center"
    },

    submitBtnTxt:{
        color:'#fff',
        textAlign:'center'
    },

    appBg:{
        backgroundColor:appBgColor
    },

    sectionBg:{
        backgroundColor:sectionBgColor
    },

    promosContainer:{
        marginLeft:10,
        marginRight:5
    },

    promoCell:{
        flex:1,
        height:128,
        marginBottom:5
    },



    promoCellImg:{
        marginRight:5,
        height:128,
        width:fullWidth / 2  - 13
    },

    fullImg:{
        width: fullWidth,
        height:180
    },

    iconPortArea:{
        height:102,
        marginBottom:10,
        backgroundColor:sectionBgColor
    },

    iconPort:{
        width:40,
        height:40
    },
    mainBtn:{
        backgroundColor:'#058BFD',
        width:141,
        height:42,
        borderRadius:2
    },

    myArea:{
        height:150,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
        backgroundColor:sectionBgColor
    },


    portTxt:{color:'white',marginTop:11,fontSize:13},


    wrapper: {
    },

    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },

    titleText: {
        fontSize: 30,
        color:'red',
        fontWeight: 'bold',
        margin:80
    },

    container: {

    }
});


module.exports = appCSS;