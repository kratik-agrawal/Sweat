import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { logoutUser } from '../api/auth-api'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import Header from "../components/Header"
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
} from 'react-native-paper'

import imageMe from "../assets/profile.jpg"


export default function ProfileScreen() {
  return (
    <>
      <TopBar title="Profile" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Avatar.Image
              size={180}
              source={
                imageMe}
              style={styles.img}
            />
        <View >
            <Caption style={styles.text2}>@kratik</Caption>
            {/* <Text > Your Friends! </Text> */}
            <View style={styles.row}>
              <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                  34
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                  46
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
        <Header style={styles.text2}>
                Your Current Balance
        </Header>
        <Button
              mode="contained"
              style={styles.buttonBefore}
        >
          <Text style={styles.text3}>$88.47</Text>
        </Button>
        <Header style={styles.text2}>
                You Have Made
        </Header>
        <Button
              mode="contained"
              style={styles.buttonBefore}
        >
          <Text style={styles.text4}>$38.47</Text>
        </Button>
        <Button mode="contained" onPress={logoutUser} style={{ width: 120 }}>
          Logout
        </Button>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 30,
    //justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text2: {
    paddingTop: 20,
    fontSize: 22,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  text3: {
    padding: 10,
    fontSize: 39,
    lineHeight: 40,
    textAlign: 'center',
    //marginBottom: 12,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  text4: {
    padding: 10,
    fontSize: 39,
    lineHeight: 40,
    textAlign: 'center',
    //marginBottom: 12,
    fontWeight: 'bold',
    color: '#4EC33A',
  },
  buttonBefore: {
    backgroundColor: '#F9F7F7',
    width: 230,
    height: 100,
    padding: 10,
    justifyContent: 'center',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    padding: 10,
    paddingLeft: 55,
    alignContent: "center",
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  img: {
    alignContent: "center"
  }
})
