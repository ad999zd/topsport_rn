import React, {Component} from 'react'
import {StyleSheet,View,Text} from 'react-native'

class CartPage extends Component {
	static navigationOptions = ({navigation}) => {
	    let navigationOptions = {
	      	title: '购物车'
	    }
	    return navigationOptions
	  };
  	render() {
	    return (
	        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	            <Text>购物车页面TTTTTTt</Text>
	        </View>
	    );
  	}

  	componentWillMount() {
		this.props.navigation.setParams({'headerTitle': '购物车'})
	}
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: '#fff',
	}
})

export default CartPage