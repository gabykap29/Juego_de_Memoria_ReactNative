import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setData(data.results));
  }, []);

  return (
    <View style={styles.container}>
    <Text style={styles.text}>
        Mejor Puntuación 🤓
    </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.email || Math.random().toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.userCard}>
            <View style={styles.userCardInner}>
              <Image
                style={styles.userImage}
                source={{ uri: item.picture?.large || 'https://via.placeholder.com/100' }}
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name?.first} {item.name?.last}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
                <Text style={styles.userLocation}>{item.location?.city}, {item.location?.country}</Text>
                <Text style={styles.userScore}>Score: {Math.floor(Math.random() * 100)}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b', // Dark background
  },
  userCard: {
    backgroundColor: '#2c3e50', // Card background (darker than container)
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  userCardInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color (white for dark theme)
  },
  userEmail: {
    color: '#ccc', // Text color (lighter for better contrast)
  },
  userLocation: {
    color: '#ccc', // Text color (lighter for better contrast)
  },
  userScore: {
    marginTop: 5,
    color: '#fff', // Text color (white for dark theme)
  },
  text:{
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },

});

export default Api;
