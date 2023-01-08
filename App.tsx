import { Text, View, StyleSheet } from 'react-native'

export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>
      <Text style={styles.eventDate}>
        08/01/2023
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    marginTop: 48,
    fontWeight: 'bold'
  },
  eventDate: {
    color: '#FDFCFE',
    fontSize: 16
  }
})