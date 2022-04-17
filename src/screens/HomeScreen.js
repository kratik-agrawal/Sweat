import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import UploadImage from '../components/UploadImage'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import { ScrollView } from 'react-native-gesture-handler';

import {
  Avatar,
  
} from 'react-native-paper'

import imageMe from "../assets/profile.jpg"

export default function HomeScreen({ navigation }) {

  const [email, setEmail] = useState({ value: '45', error: '' });
  const [day, setDay] = useState({ value: '6', error: '' })
  //const [password, setPassword] = ({ value: email*1.05, error: '' });
  const newValue = "" + Math.trunc((email.value * 1.13));

  let honey = "";
  const val1 = "" + Math.trunc((email.value * (day.value/9.5)));
  const val2 = "" + Math.trunc((email.value * ((day.value-2)/9.5)));
  const val3 = "" + Math.trunc((email.value * ((day.value-3)/9.5)));
  
  return (
    <>
    
    <TopBar title="Home" />
    <ScrollView>
    <Background>
      <View style={styles.container}>
         <Avatar.Image
              size={180}
              source={
                imageMe}
              style={styles.img}
            />
        <Header style={styles.text2}>Welcome back!</Header>
        
        <Paragraph>Hedge any amount of money between ($10 and $100). Workout and you will get it back plus more, or else we will charge you.</Paragraph>
        <TextInput
          label="Enter $ You Want to Hedge"
          returnKeyType="next"
          value={"" + (email.value * 1.00)}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          
        />
        <Text style={styles.text5}>
          {"You will get back around: "}
          <Text style={styles.text6}>{"$" + newValue}</Text>
        </Text>
        <View style={styles.bg}>
          <Paragraph style={styles.text11}>
          Commit to a number of gym visits per week (3-7), stick with it.
          </Paragraph>
          <Paragraph style={styles.text11}>
          Here's how we charge you if you miss workouts. 
          </Paragraph>
        </View>
        
        <TextInput
          label="Enter # Days You Commit Too"
          returnKeyType="next"
          value={"" + (day.value * 1.00)}
          onChangeText={(text) => setDay({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          
        />
       
        <Text style={styles.text5}>
          {"Miss 1 Day: "}
          <Text style={styles.text7}>{"$" + val1}</Text>
        </Text>
        <Text style={styles.text5}>
          {"Miss 2 Days: "}
          <Text style={styles.text7}>{"$" + val2}</Text>
        </Text>
        <Text style={styles.text5}>
          {"Miss 3 Days: " }
          <Text style={styles.text7}>{"$" + val3}</Text>
        </Text>
        <Button
          mode="contained"
          onPress={navigation.openDrawer}
          style={{ width: 250 }}
        >
          Open Side Menu
        </Button>
      </View>
    </Background>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    maxWidth: 340,
    width: '100%',
    //justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    paddingTop: 15,
    color: '#ffffff',
  },
  text11: {
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text12: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    padding: 12,
    //fontWeight: 'bold',
    color: '#000000',
  },
  text2: {
    paddingTop: 20,
    fontSize: 25,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  text3: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  text5: {
    padding: 10,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  text6: {
    padding: 25,
    fontSize: 22,
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#4EC33A',
  },
  text7: {
    padding: 10,
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#F04933',
  },
  bg: {
    padding: 25,
    width: 400,
    backgroundColor: '#FF8F80',
  }
})
