import React, {Component} from 'react'
import {StyleSheet,View,Text,Image,InteractionManager,Alert,TouchableOpacity} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import Cart from '../../pages/index/CartPage';
import {scaleSize} from '../../font';
const rightSj = require('../../imgs/right.png')
const listData = [
	{
		'id':'vip',
		'title': '会员列表',
		'img': require('../../imgs/myvip.png'),
	},
	{
		'id':'like',
		'title': '我的喜欢',
		'img': require('../../imgs/mylike.png'),
	},
	{
		'id':'create',
		'title': '我的创作',
		'img': require('../../imgs/mycreate.png'),
	},
	{
		'id':'order',
		'title': '我的订单',
		'img': require('../../imgs/myorder.png'),
	},
	{
		'id':'notice',
		'title': '售后须知',
		'img': require('../../imgs/notice.png'),
	},	
]
export default class MineList extends Component {
	constructor(props) {
	    super(props);
	    this.listClick = this.listClick.bind(this);
	}
	listClick(id){
		if(id === 'like'){
			this.props.navigation.navigate('Love')  //对应AppNavigator.js文件的StackNavigator
		}else if(id === 'create'){
			this.props.navigation.navigate('Create')
		}else if(id === 'notice'){
			this.props.navigation.navigate('Notice')
		}
	}
  	render() {
	    return (
	        <View style={styles.lists}>
	        	{listData.map((item,index)=>{
	        		return(
	        			<TouchableOpacity style={styles.single_list} key={index} onPress={()=>this.listClick(item.id)}>
	        				<Image source={item.img} style={styles.list_img} />
	        				<Text style={styles.list_name}>{item.title}</Text>
	        				<Image source={rightSj} style={styles.right_img} />
	        			</TouchableOpacity>
	        		);
	        	})}
	        </View>
	    );
  	}
}

const styles = StyleSheet.create({
	lists:{
		marginLeft: 15,
		marginRight: 15,
	},
	single_list:{
		alignItems:'center',
		height: scaleSize(120),
		borderBottomWidth: 1,
		borderBottomColor: '#e5e5e5',
		position: 'relative',
	},
	list_img:{
		position:'absolute',
		top: scaleSize(38),
		left: 0,
		width: scaleSize(44),
		height: scaleSize(44),
	},
	list_name:{
		position: 'absolute',
		top: scaleSize(42),
		left: scaleSize(66),
		fontSize: scaleSize(32),
		color: '#000',
	},
	right_img:{
		position:'absolute',
		top: scaleSize(46),
		right: 0,
		width: scaleSize(16),
		height: scaleSize(28),
	},
})
