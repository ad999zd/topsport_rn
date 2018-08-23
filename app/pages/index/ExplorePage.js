import React, {Component} from 'react'
import {StyleSheet,View,Text} from 'react-native'
import { createMaterialTopTabNavigator} from 'react-navigation';
import ExploreTopTab from '../../components/explore/ExploreTopTab'

class EeplorePage extends Component {
	static navigationOptions = ({navigation}) => {
	    let navigationOptions = {
	      title: '发现'
	    }
	    return navigationOptions
	  };

	componentWillMount() {
		this.props.navigation.setParams({'headerTitle': '发现'})
	}
  	render() {
	    return (
	        <View style={{ flex: 1,backgroundColor: '#fff' }}>
	        	<ExploreTopTab />
	            <Text>发现页yyy2t</Text>
	        </View>
	    );
  	}
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: '#fff',
	}
})

export default EeplorePage