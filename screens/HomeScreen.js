import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
          <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
        <Image
          style={styles.image}
          source={require('../assets/products/hotel.jpg')}
        />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Rababi food Studio</Text>
          
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
        <Image
          style={styles.image}
          source={require('../assets/products/hotel2.jpg')}
        />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Hotel Ashoka</Text>
          
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
        <Image
          style={styles.image}
          source={require('../assets/products/hotel3.jpg')}
        />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Beer Cafe</Text>
          
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
        <Image
          style={styles.image}
          source={require('../assets/products/hotel4.jpg')}
        />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Khana Khazana</Text>
          
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
      },
      infoContainer: {
        padding: 16,
      },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
      },
});
