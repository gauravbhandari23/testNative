
import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const TextInputs = () => {
  const [name, setName] = React.useState('');
  return (
    <View>
      <TextInput value={name} placeholder={'Enter your name'} style={styles.input}
      onChangeText={(text)=>setName(text)}
      />
      <Text>Your name is {name}</Text>
    </View>
  )
}

export default TextInputs

const styles = StyleSheet.create({
    input: {
      marginTop: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
})