import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
export default class App extends Component{

  state ={
    data:[]
  }
  setOpacityTo(value) {
  // Redacted: animation related code
  this.refs[CHILD_REF].setNativeProps({
    opacity: value
  });
}

  fetchData= async()=>{
    const response = await fetch('https://raw.githubusercontent.com/Hardeepcoder/fake_json/master/Users');
    const users = await response.json();
    this.setState({data: users});

  }
componentDidMount(){
  this.fetchData();
}
  render() {
    return (
      <View >
      <TouchableOpacity onPress={this._handlePress}>
  <View style={styles.button}>
    <Text>Press me!</Text>
  </View>
</TouchableOpacity>
       <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

       <View style={{backgroundColor:'#ff5f52',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{color:'#fff'}}>{item.email}</Text>
          <Text>City: {item.address.city}</Text>
         </View>

       }

       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});