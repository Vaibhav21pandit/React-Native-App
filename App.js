import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {
  let x=10;
  x.toString();
  console.log(x)
  return ( 
        <View style = {styles.container}>
    
    <Text > Hi There Vaibhav! </Text>
    <Text> It's such a lovely day,now get to work please.</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});