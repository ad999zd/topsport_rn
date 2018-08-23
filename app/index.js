/**
 * Created 
 * Function:为了兼容Android和iOS设置统一程序入口
 * Desc:
 */
import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {AppNavigator} from './pages/index/AppNavigator'

AppRegistry.registerComponent('rn_topsport_show', () => AppNavigator);