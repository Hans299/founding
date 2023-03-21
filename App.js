import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType={"terrain"}
        initialRegion={{
          latitude: -6.2088,
          longitude: 105.8456,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }} >

        <Marker
          title='Lokasi Saya'
          coordinate={{ 
            latitude: -6.2088,
            longitude: 105.8456,
          }} />
          

        <Marker
          title='Lokasi Gerry'
          coordinate={{ 
            latitude: -6.2088,
            longitude: 106.8456,
          }} />

    </MapView>
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
});
