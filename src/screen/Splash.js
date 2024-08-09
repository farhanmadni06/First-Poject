import { View, Text, Image } from 'react-native'
import React from 'react';


const Splash = () => {
  return (
    <View style={{flex:1,justifyContent:'center',padding:15}}>
      <View style={{alignItems:'center'}}>
<Image style={{height:500,width:500}} source={require('../img/clouds.png')}/>
</View>
    </View>
  )
}

export default Splash