import React, {Component} from 'react'
import {StyleSheet,View,Text,ScrollView} from 'react-native'
import {scaleSize} from '../../font';

export default class MyLove extends Component {
  	render() {
	    return (
	      	<ScrollView style={styles.notice}>
	        	<Text style={styles.header}>1、退换货承诺</Text>
		        <View style={styles.item_content}>
		          <Text style={styles.strip}>A、自您签收商品之日起7日内，在不影响二次销售的前提下，提供无理由退换货；</Text>
		          <Text style={styles.strip}>B、所有产品均执行国家商品质量三包规定服务；</Text>
		          <Text style={styles.strip}>C、所有产品的退换货服务，需联系购买店铺。</Text>
		        </View>
		        <Text style={styles.header}>2、以下情况将不提供退换货服务</Text>
		        <View style={styles.item_content}>
		          <Text style={styles.strip}>A、任何限量款商品、非店铺出售的产品或超过三包期限产品；</Text>
		          <Text style={styles.strip}>B、超过店铺承诺的7天退换货有效时间（产品属质量问题除外）；</Text>
		          <Text style={styles.strip}>C、商品相关附件、保修单或三包卡或保修卡、吊牌、发票（若开具过发票）、赠品等不完整，商品的外包装损坏(包括包裹填充物及外包装盒)、鞋盒上有直接粘有胶带类物品；</Text>
		          <Text style={styles.strip}>D、无质量问题并已使用过的商品、商品受污损，影响二次销售(鞋底、鞋面已磨损、已有穿着痕迹属于影响二次销售)；</Text>
		          <Text style={styles.strip}>E、因非正常使用、保养（贮存）不当，造成的商品损坏（如污损、自行维修，修改加工，洗涤等）；</Text>
		          <Text style={styles.strip}>F、出于安全和卫生考虑，贴身用品如内衣裤、短袜/打底袜/丝袜/美腿袜、塑身裤、塑身连体衣、插片/胸垫、泳衣类商品不予退换货，经权威部门检测商品存在内在质量问题者除外；</Text>
		          <Text style={styles.strip}>G、店铺内明确标明不能退换货的商品。</Text>
		        </View>
		        <Text style={styles.header}>3、退换货注意事项或相关运费须知</Text>
		        <View style={styles.item_content}>
		            <Text style={styles.strip}>A、如果商品需要退换货，需出具购买时的购物小票，礼包或套餐等活动如有绑定赠品的主商品需要退货，要将赠品一同退回。退货商品及赠品需保持完好；</Text>
		            <Text style={styles.strip}>B、如果商品有吊牌，请您不要轻易剪掉或损坏吊牌，吊牌被剪掉或损坏，会直接影响退换服务；</Text>
		            <Text style={styles.strip}>C、如果商品安有防盗扣，请您不要轻易取下，防盗扣取下或丢失，会直接影响退换服务；</Text>
		            <Text style={styles.strip}>D、符合店铺承诺退换货标准的商品，请采用普通快递方式或到店退回；</Text>
		            <Text style={styles.strip}>E、退换货商品如采用快递方式退回，需用户自己承担运费，不接受到付；</Text>
		            <Text style={styles.strip}>F、优惠券等非现金的馈赠款项，在退货时不做返还(商品质量问题除外)。</Text>
		        </View>
	      	</ScrollView>
	    );
  	}
}

const styles = StyleSheet.create({
	notice: {
		backgroundColor: '#fff',
		paddingLeft:15,
		paddingRight: 15,
	},
	header:{
		fontSize:scaleSize(32),
		color:'#333',
		marginBottom:10,
		fontWeight:'bold',
	},
	item_content:{
  		marginBottom:20,
	},
	strip:{
		flexDirection: 'row',
		fontSize:scaleSize(28),
  		color:'#666',
  		lineHeight:22
	}
})


