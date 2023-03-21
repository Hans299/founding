import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [textInputValue, setTextInputValue] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const toProfile = () => {
    navigation.navigate('Profile')
  }
 
  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          mapType={"terrain"}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
          <Marker
            title='info'
            onPress={() => toProfile()}
            coordinate={{ 
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }} />
        </MapView>
      )}
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={textInputValue}
          onChangeText={handleTextInputChange}
          placeholder="Temukan Lahan"
        />
        <Button
            title="Cari Lokasi"
            onPress={() => alert('Fitur belum tersedia!')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  textInputContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  textInput: {
    width: 300,
    height: 40,
  },
});