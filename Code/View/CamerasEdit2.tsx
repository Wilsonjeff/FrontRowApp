import React from 'react';
import {  StyleSheet, Text, View, TouchableHighlight, } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';

export default class IpView extends React.Component<any, object>{
    render(){
        return(
            <View style={styles.backgroundColor}>
                <Text style={styles.title}>192.168.11.12</Text>

                {/* Alias*/}
                <TouchableHighlight onPress={()=>{}}
                    onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                    onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                    underlayColor={'transparent'}>
                    <View style={styles.butt}>
                        <Text style={styles.textsize}>Alias:                                                         192.168.11.12</Text>
                    </View>
                </TouchableHighlight>

                {/*Ip */}
                <TouchableHighlight onPress={()=>{}}
                    onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                    onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                    underlayColor={'transparent'}>
                    <View style={styles.butt}>
                        <Text style={styles.textsize}>IP:                                                               192.168.11.12</Text>
                    </View>
                </TouchableHighlight>

                {/*fps */}
                <TouchableHighlight onPress={()=>{}}
                    onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                    onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                    underlayColor={'transparent'}>
                    <View style={styles.butt}>
                        <Text style={styles.textsize}>fps:                                                                          15fps</Text>
                    </View>
                </TouchableHighlight>

                {/*Resolution */}
                <TouchableHighlight onPress={()=>{}}
                    onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                    onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                    underlayColor={'transparent'}>
                    <View style={styles.butt}>
                        <Text style={styles.textsize}>Resolution:                                                  1028*720p</Text>
                    </View>
                </TouchableHighlight>

                {/*Bitrate */}
                <TouchableHighlight onPress={()=>{}}
                    onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                    onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                    underlayColor={'transparent'}>
                    <View style={styles.butt}> 
                        <Text style={styles.textsize}>Bitrate:                                                                    1024</Text>
                    </View>
                </TouchableHighlight>

                {/*OSD */}
                <TouchableHighlight onPress={()=>{}}
                    onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                    onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                    underlayColor={'transparent'}>
                    <View style={styles.butt}> 
                        <Text style={styles.textsize}>OSD:                                                                           OFF</Text>
                    </View>
                </TouchableHighlight>
                
                {/* return button */}
                <TouchableHighlight onPress={()=>{
                    this.props.navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName : 'Home' })
                        ],
                    }))
                }}
                    onHideUnderlay={()=>{this.setState({ pressed1:false })}}
                    onShowUnderlay={()=>{this.setState({ pressed1:true })}}
                    underlayColor={'transparent'}>
                    <View style={styles.rebutt}> 
                        <Text style={styles.resize}>Return</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    backgroundColor:{
        flex:1,
        backgroundColor: 'black',
    },
    title:{
        color: 'white',
        fontSize: 40,
        marginTop: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    butt:{
        backgroundColor: '#1c1c1e',
        height: 40,
        marginTop: 40,
        textAlign: 'center',
        justifyContent: 'center',
    },
    textsize:{
        fontSize: 15,
        color:'#fff',
        fontWeight:'bold',
        marginLeft: 40,
    },
    rebutt:{
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
    resize:{
        fontSize:12,
        color: '#fff',
    }
});