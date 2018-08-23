import React from 'react';
import { Text, View, StyleSheet,Image,Alert } from 'react-native';
import { createBottomTabNavigator,StackNavigator,createStackNavigator } from 'react-navigation';
import ExplorePage from './ExplorePage';
import CartPage from './CartPage';
import MinePage from './MinePage';
import {COLOR} from '../../config';
import MyLove from '../../components/mine/MyLove'
import MyCreate from '../../components/mine/MyCreate'
import NoticeScreen from '../../components/mine/Notice'
const Explore = require('../../imgs/found.png');
const Explore_Focus = require('../../imgs/foundSelect.png');
const Cart = require('../../imgs/cart.png');
const Cart_Focus = require('../../imgs/cartSelect.png');
const My = require('../../imgs/my.png');
const My_Focus = require('../../imgs/mySelect.png');


// const FindIndex = StackNavigator(
//     {
//         FindIndex: {screen: ExplorePage},
//     },
//     {
//         navigationOptions: {
//             headerTintColor: '#000',
//             headerStyle: {
//                 backgroundColor: '#fff',
//                 borderBottomWidth: 0,
//             },
//             headerTitle: '发现'
//         }
//     }
// )


const tab = createBottomTabNavigator(
    {
        'see': ExplorePage,
        'cart':CartPage,
        'my': MinePage,
    },
    {
        tabBarPosition: 'bottom',
        lazy: true,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'see') {
                  iconName = focused ? Explore_Focus : Explore;
                } else if (routeName === 'cart') {
                    iconName = focused ? Cart_Focus : Cart;
                }else if (routeName === 'my') {
                    iconName = focused ? My_Focus : My;
                }
                return <Image source={iconName} style={{width: 26,height:26,}}/>
            },
            tabBarVisible: true,
        }),
        tabBarOptions: {
            activeTintColor: '#333',
            inactiveTintColor: 'gray',
            showIcon: true,
            labelStyle:{
                fontSize: 12,
            },
            tabStyle:{
                backgroundColor: '#fff',
            },
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#fff',
            showLabel: true,
        },
    }
);

export const AppNavigator = StackNavigator(
    {
        Tab: {screen: tab},
        Create: {
            screen: MyCreate,
            navigationOptions: ({ navigation }) => ({
                headerTitle:'我的创作',
            }),
            // initialRouteParams: {
            //     headerTitle: "我的创作"
            // }
        },
        Love: {
            screen: MyLove,
            navigationOptions: ({ navigation }) => ({
                headerTitle:'我的喜欢',
            }),
        },
        Notice: {
            screen: NoticeScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle:'售后须知',
                headerBackTitle: null,
            }),
        },
    },
    {
    initialRouteName: 'Tab',
    navigationOptions: ({ navigation }) => {
        let headerTitle = navigation.getParam('headerTitle', "")
        if (navigation.state.routes) {
            let active = navigation.state.routes[navigation.state.index]
            // headerTitle = active.params.headerTitle
            if (active.params) {
                headerTitle = active.params.headerTitle
            }
            console.log('hahah', active.params, 'active')
        }
        // console.log(navigation.state)
        return {
            headerTitle,
            headerTintColor: '#000',
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 0,
            },
        }},
    }
)
