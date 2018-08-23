import React, {Component} from 'react'
import {StyleSheet,View,Text,Alert} from 'react-native'

export default class ExploreContList extends Component {
	constructor(props) {
        super(props);
        console.log(this.props.tab_type)
        // call parent component
    }
	render() {
	    return (
	    	<View>
		        <Text>{this.props.tab_type}</Text>
	        </View>
	    );
  	}
}

const styles = StyleSheet.create({
	
})