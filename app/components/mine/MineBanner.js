import React, {Component} from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import {scaleSize} from '../../font';
const p_banner = require('../../imgs/p_banner.png');
const banner_header = require('../../imgs/headPortrait.png');

export default class MineBanner extends Component {
  	render() {
	    return (
            <View style={styles.banner}>
            	<Image source={p_banner} style={styles.bg_banner} />
            	<Text style={styles.banner_tit}>登录</Text>
            	<View  style={styles.ban_header}>
            		<Image source={banner_header} style={styles.header_img} />
            	</View>
            </View>
	    );
  	}
}

const styles = StyleSheet.create({
	banner:{
		position:'relative',
	},
	bg_banner: {
		height: scaleSize(300),
		width: 'auto',
	},
	banner_tit:{
		position: 'absolute',
		top: scaleSize(128),
		left: 15,
		color: '#fff',
		fontSize: scaleSize(48),
		zIndex: 1,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	ban_header: {
		width: scaleSize(160),
		height: scaleSize(160),
		position: 'absolute',
		top: 35,
		right: 15,
		borderRadius: 80,
		backgroundColor: '#fff',
	},
	header_img: {
		width: scaleSize(160),
		height: scaleSize(160),
		borderRadius: 40,
	}
})
