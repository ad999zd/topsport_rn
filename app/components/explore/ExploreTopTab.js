import React, {Component} from 'react'
import {StyleSheet,View,Text,Alert} from 'react-native'
import ExploreContList from './ExploreContList'
import {scaleSize} from '../../font';
export default class ExploreTopTab extends Component {
	constructor(props) {
	    super(props);
	    this.state={
      		tabType: 'all', //切换tab所得类型
    	};
	    this.tabIndex=this.tabIndex.bind(this);
	}
	tabIndex(val){
		if(val === 'all'){
			this.setState({tabType: 'all'})
		}else if(val === 'video'){
			this.setState({tabType: 'video'})
		}else if(val === 'discounts'){
			this.setState({tabType: 'discounts'})
		}
		// Alert.alert(this.state.tabType)
	}
	render() {
	    return (
	    	<View>
		        <View style={styles.top_tab}>
		            <Text style={[styles.tab_list,this.state.tabType === 'all' ? styles.active_tab_list : null]} onPress={()=>this.tabIndex('all')}>全部</Text>
		            <Text style={[styles.tab_list,this.state.tabType === 'video' ? styles.active_tab_list : null]} onPress={()=>this.tabIndex('video')}>视频</Text>
		            <Text style={[styles.tab_list,this.state.tabType === 'discounts' ? styles.active_tab_list : null]} onPress={()=>this.tabIndex('discounts')}>优惠</Text>
		        </View>
		        <ExploreContList tab_type={this.state.tabType}/>
	        </View>
	    );
  	}
}

const styles = StyleSheet.create({
	top_tab: {
		height:44,
		flexDirection: 'row',
      	justifyContent:'space-around',
      	borderBottomWidth: 1,
      	borderBottomColor: '#ddd',
	},
	tab_list: {
		flex: 1,
		textAlign: 'center',
		lineHeight: 44,
		color: '#999',
      	fontSize: scaleSize(28),
	},
	active_tab_list: {
		color: '#00BBB4',
	}
})