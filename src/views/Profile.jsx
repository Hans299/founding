import { Image } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

export default function Profile({navigation}) {
    const toHome = () => {
        navigation.navigate('Home')
    };

  return (
    <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 66}}>
         
        <View style={{flexDirection: 'row', marginBottom: 50}}>
            <TouchableOpacity onPress={toHome} style={{marginLeft: 18}}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>Kembali</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 30, marginBottom: 40,alignItems: 'center'}}>
            <Image source={require('../../assets/hans.jpg')} style={{ width: 200, height: 200}} resizeMode='contain'/>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 40}}>
            <Text style={{color: '#000', fontSize: 24}}>Nama Lengkap:</Text>
            <Text style={{color: '#000', fontSize: 22}}>Hans Bonatua Batubara</Text>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 40}}>
            <Text style={{color: '#000', fontSize: 24}}>NIM:</Text>
            <Text style={{color: '#000', fontSize: 22}}>120140131</Text>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 40}}>
            <Text style={{color: '#000', fontSize: 24}}>Kelas:</Text>
            <Text style={{color: '#000', fontSize: 22}}>Pengembangan Aplikasi Mobila (RA)</Text>
          </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#9B85D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 8
  },
});