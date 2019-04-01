import React from 'react';
import {  StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import VideoComponent from '../Component/VideoComponent'


export default class HomepageView extends React.Component <any, object>{

    render() {
      return (
        <View style={styles.background}>
            <Text style={styles.title}>Camera List</Text>  

            {/* refresh button */}
            <TouchableHighlight onPress={()=>{}}
                onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                underlayColor={'transparent'}>
                <View style={styles.butt}>
                    <Text style={ styles.textSize }>Refresh</Text>
                </View>
            </TouchableHighlight>

            {/* ip address */}
            <TouchableHighlight onPress={()=>{
                this.props.navigation.dispatch(StackActions.reset({
                    index:0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'CamerasEdit'})
                    ]
                }))
            }}
                onHideUnderlay={()=>{this.setState({ pressed1:false})}}
                onShowUnderlay={()=>{this.setState({ pressed1:true})}}
                underlayColor={'transparent'}>
                <View style={styles.ipbutt}>
                    <Text style={ styles.iptextSize}>192.168.11.11</Text>
                </View>
            </TouchableHighlight>

            {/* video*/}
            <View>
                <VideoComponent/>
            </View>

             {/* ip address 2 */}
             <TouchableHighlight onPress={()=>{
                this.props.navigation.dispatch(StackActions.reset({
                    index:0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'CamerasEdit2'})
                    ]
                }))
            }}
                onHideUnderlay={()=>{this.setState({ pressed1:false})}}
                onShowUnderlay={()=>{this.setState({ pressed1:true})}}
                underlayColor={'transparent'}>
                <View style={styles.ipbutt}>
                    <Text style={ styles.iptextSize}>192.168.11.12</Text>
                </View>
            </TouchableHighlight>
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'black',
    },
    title:{
        color: 'white',
        fontSize: 40,
        marginTop: 50,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    butt:{
        backgroundColor:'#f90',
        height: 25,
        width:100,
        marginTop:30,
        marginLeft:135,
        borderRadius:10,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    textSize:{
        fontSize:12,
        color: '#fff',
    },
    ipbutt:{
        backgroundColor:'#1c1c1e',
        height:40,
        marginTop:40,
        textAlign:'center',
        justifyContent:'center',
    },
    iptextSize:{
        fontSize:15,
        color:'#fff',
        fontWeight:'bold',
        marginLeft:40,
    },
  });
  