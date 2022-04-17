import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref } from "firebase/storage";
import firebase from 'firebase/app'





export default function UploadImage() {
 const [image, setImage] = useState(null);
 const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });


    // Create a root reference
    const storage = getStorage(firebase);
    const imageRef = ref(storage, 'images/' + file.name);
    uploadBytesResumable(imageRef, image, metadata)
    .then((snapshot) => {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
        console.log('File available at', url);
        // ...
        });
    }).catch((error) => {
        console.error('Upload failed', error);
        // ...
    });
    
    // Create a reference to 'images/mountains.jpg'
    const testRef = ref(storage, 'images/test1.jpg');
    uploadBytes(testRef, image);
    console.log(JSON.stringify(_image));
  
     if (!_image.cancelled) {
       setImage(_image.uri);
     }
  };

 return (
<View style={imageUploaderStyles.container}>
               {
                   image  &&<Image source={{ uri: image }} style={{ width: 500, height: 500 }} />
               }

<View style={imageUploaderStyles.uploadBtnContainer}>
<TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
<Text>{image ? 'Edit' : 'Upload'} Image</Text>
<AntDesign name="camera" size={20} color="black" />
</TouchableOpacity>
</View>


</View>

 );
}

const imageUploaderStyles=StyleSheet.create({
   container:{
       elevation:2,
       height:500,
       width:500,
       backgroundColor:'#efefef',
       position:'relative',
       //borderRadius:999,
       overflow:'hidden',
   },
   uploadBtnContainer:{
       opacity:0.7,
       position:'absolute',
       right:0,
       bottom:0,
       backgroundColor:'lightgrey',
       width:'100%',
       height:'25%',
   },
   uploadBtn:{
       display:'flex',
       alignItems:"center",
       justifyContent:'center'
   }
})