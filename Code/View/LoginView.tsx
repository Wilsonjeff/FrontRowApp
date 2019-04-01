import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


export default class LoginView extends React.Component<any, object> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FrontRow Camera Feed</Text>

        {/*account */} 
        <Text style={styles.acc}>Account</Text>
        <View style={styles.input}>
          <TextInput style={styles.inputText}></TextInput>
        </View>

        {/* password */}
        <Text style={styles.pss}>Password</Text>
        <View style={styles.input}>
          <TextInput style={styles.inputText} secureTextEntry={true}></TextInput>
        </View>

        {/*login button */}
        
          <TouchableHighlight  onPress={()=>{
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
            onHideUnderlay={()=>{this.setState({ pressed1: false })}}
            onShowUnderlay={()=>{this.setState({ pressed1: true })}} 
            underlayColor={'transparent'}>
            <View style={styles.butt}>
              <Text style={ styles.textSize }>Login</Text>
            </View> 
          </TouchableHighlight>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize:40,
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  acc: {
    color: 'white',
    fontSize: 20,
    marginTop: 210,
    marginLeft: 60,
  },
  pss:{
    color: 'white',
    fontSize: 20,
    marginTop: 40,
    marginLeft: 60,
  },
  input: {
    height: 35,
    width: 250,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 60,
    marginTop: 0,
  },
  inputText:{
    color: 'white',
    fontSize: 20,
  },
  butt: {
    backgroundColor: '#f90',
    height: 25,
    width: 100,
    marginTop: 70,
    marginLeft:135,
    borderRadius: 10,    
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSize: {
    fontSize: 12,
    color: '#fff',
  }
});
