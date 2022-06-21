import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default function LoginButton() {
  return (
    <View style={styles.commonButton}>
      <TouchableOpacity style={styles.btnOpacity} activeOpacity={0.7} >
      <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  commonButton: {
    paddingHorizontal:24,
    paddingBottom:50,
  },
  btnOpacity: {
    backgroundColor:'#fff',
    borderRadius:10,
    height:55,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  btnText: {
    fontSize:13,
    color:'rgba(0, 99, 157, 1)',
    fontFamily: 'Manrope-SemiBold',
  }
})
