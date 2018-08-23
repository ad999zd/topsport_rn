import React, {Component} from 'react'
import {StyleSheet,View,Text} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import MineBanner from '../../components/mine/MineBanner'
import MineList from '../../components/mine/MineList'
import MyLove from '../../components/mine/MyLove'
import MyCreate from '../../components/mine/MyCreate'

export default class MinePage extends Component {
	static navigationOptions = ({navigation}) => {
	    let navigationOptions = {
	      	title: '我的',
	    }
	    return navigationOptions
	};
  	render() {
	    return (
	        <View style={{ flex: 1, backgroundColor: '#fff' }}>
	        	<MineBanner />
	        	<MineList {...this.props}/>
	            <Text></Text>
	        </View>
	    );
  	}

  	componentWillMount() {
		this.props.navigation.setParams({'headerTitle': '我的'})
	}
}


const styles = StyleSheet.create({
	bg: {
		backgroundColor: '#fff',
	}
})