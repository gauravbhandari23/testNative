import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'

const Basics = () => {
    const [count, setCount] = React.useState(0);
  return (
    <View>
      <View style={styles.boxContainer}>
              <View style={styles.redBox}></View>
              <View style={styles.greenBox}></View>
              <View style={styles.blueBox}></View>
            </View>
      
            <Text style={styles.text}>My name is  and number is{count}</Text>
      
            <Image source={{uri: 'https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={{width: 150, height: 150}} />
          <Button onPress={()=>setCount(count+1)} title='press me' />
    </View>
  )
}

export default Basics

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      redBox: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
      },
      greenBox: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
      },
      blueBox: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
      },
      text: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 20,
      },
})