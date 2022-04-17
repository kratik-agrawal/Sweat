import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import Logo from '../components/Logo'

// import * as mobilenet from '@tensorflow-models/mobilenet'
// see https://github.com/tensorflow/tfjs-models
import * as cocossd from '@tensorflow-models/coco-ssd'

import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as jpeg from 'jpeg-js'
import * as ImagePicker from 'expo-image-picker'

import { fetch } from '@tensorflow/tfjs-react-native'
import Background from '../components/Background';
import TopBar from '../components/TopBar'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default class CocoSsdScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
      isModelReady: false,
      predictions: null,
      image: null,
      isClicked: false
    };
  }
  

  async componentDidMount() {
    await tf.ready(); // preparing TensorFlow
    this.setState({ isTfReady: true,});

    // this.model = await mobilenet.load(); // preparing MobileNet model
    this.model = await cocossd.load(); // preparing COCO-SSD model
    this.setState({ isModelReady: true });

    this.getPermissionAsync(); // get permission for accessing camera on mobile device
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (status !== 'granted') {
            alert('Please grant camera roll permission for this project!')
        }
    }
  }

  imageToTensor(rawImageData) {
    const TO_UINT8ARRAY = true
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3)
    let offset = 0 // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset]
      buffer[i + 1] = data[offset + 1]
      buffer[i + 2] = data[offset + 2]

      offset += 4
    }

    return tf.tensor3d(buffer, [height, width, 3])
  }

  detectObjects = async () => {
    try {
      const imageAssetPath = Image.resolveAssetSource(this.state.image)

      const response = await fetch(imageAssetPath.uri, {}, { isBinary: true })
      const rawImageData = await response.arrayBuffer()
      const imageTensor = this.imageToTensor(rawImageData)
      const predictions = await this.model.detect(imageTensor)

      this.setState({ predictions: predictions })
      // this.setState({ image_uri: imageAssetPath.uri })

      console.log('----------- predictions: ', predictions);

    } catch (error) {
      console.log('Exception Error: ', error)
    }
  }

  selectImage = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7
      })

      if (!response.cancelled) {
        const source = { uri: response.uri }
        this.setState({ image: source })
        this.detectObjects()
      }
    } catch (error) {
      console.log(error)
    }
  }

  clickTheButton = async () => {
    try {
        this.setState({ isClicked: true, })
    } catch (error) {
      console.log(error)
    }
  }

  /*
  [{
  bbox: [x, y, width, height],
  class: "person",
  score: 0.8380282521247864
  }, {
  bbox: [x, y, width, height],
  class: "kite",
  score: 0.74644153267145157
  }]
  */
  renderPrediction = (prediction, index) => {
    const pclass = prediction.class;
    const score  = prediction.score;
    const x = prediction.bbox[0];
    const y = prediction.bbox[1];
    const w = prediction.bbox[2];
    const h = prediction.bbox[3];

    return (
      <View style={styles.welcomeContainer}>
        <Text  key={index} style={styles.text}>
          Prediction: {'Verified Dumbbell'} 
        </Text>
      </View>
    )
  }

  render() {
    const { isTfReady, isModelReady, predictions, image, isClicked } = this.state
    const statement = "hello";
    
    return (
      <>
      
          <TopBar title="Verify" />
          
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
        <View style={styles.welcomeContainer}>
        <Logo />
            <Header style={styles.text2}>
                Hope you are having a great workout!
            </Header>
            <Button
                mode="contained"
                onPress={this.clickTheButton}
                style={isClicked ? styles.buttonAfter : styles.buttonBefore}
                >
                {isClicked ? <Text styles={styles.textBefore}>Verified at BFit</Text> : <Text styles={styles.textAfter}>Verify Your Location</Text>}
            </Button>
        </View>
        
        {/* <Paragraph>{isClicked ? <Text>Verified at BFit</Text> : ''}</Paragraph> */}
        <View style={styles.welcomeContainer}>
        <View style={styles.loadingContainer}>
            <Header style={styles.text3}>
                Today's Picture: Dumbbell
            </Header>
            <Paragraph style={styles.text}>
                Give us a minute to load our functionality!
            </Paragraph>
          <Text style={styles.text}>
            TensorFlow.js ready? {isTfReady ? <Text>✅</Text> : ''}
          </Text>

          <View style={styles.loadingModelContainer}>
            <Text style={styles.text}>Object Detection Algorithm ready? </Text>
            {isModelReady ? (
              <Text style={styles.text}>✅</Text>
            ) : (
              <ActivityIndicator size='small' />
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={isModelReady ? this.selectImage : undefined}>
          {image && <Image source={image} style={styles.imageContainer} />}

          {isModelReady && !image && (
            <Text style={styles.transparentText}>Tap to choose image</Text>
          )}
        </TouchableOpacity>
        <View style={styles.predictionWrapper}>
          {isModelReady && image && (
            <Text style={styles.text}>
              Dumbbell: {predictions ? '' : 'Verified'}
            </Text>
          )}

          {isModelReady &&
            predictions &&
            predictions.map((p, index) => this.renderPrediction(p, index))}
        </View>
        </View>
        </ScrollView>
      
      </>
    )
  }
}

CocoSsdScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    //maxWidth: 340,
    
    backgroundColor: '#ffffff'
  },
  welcomeContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    //marginTop: 10,
    
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  contentContainer: {
    paddingTop: 10,
  },
  loadingContainer: {
    marginTop: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8F80',
    width: 500,
    padding: 25,
    marginTop: 15,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 7,
  },
  buttonAfter: {
    backgroundColor: '#4EC33A',
  },
  buttonBefore: {
    backgroundColor: '#000000',
  },
  text2: {
    padding: 10,
    fontSize: 22,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FF7f50',
  },
  text3: {
    padding: 10,
    fontSize: 22,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FFffff',
  },
  textAfter: {
    padding: 10,
    fontSize: 22,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  loadingModelContainer: {
    flexDirection: 'row',
    //marginTop: 10
  },
  imageWrapper: {
    width: 280,
    height: 280,
    padding: 10,
    borderColor: '#FF7F50',
    borderWidth: 5,
    borderStyle: 'dashed',
    marginTop: 40,
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  imageContainer: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  transparentText: {
    color: '#ffffff',
    opacity: 0.7
  },
  poweredBy: {
    fontSize: 20,
    color: '#e69e34',
    marginBottom: 6
  },
  tfLogo: {
    width: 125,
    height: 70
  },
  
})