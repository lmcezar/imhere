import { Text, View } from 'react-native'

export default function App() {
  return(
    <View style={{ 
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
     }}>
      <Text style={{ 
        color: '#FDFCFE',
        fontSize: 24,
        marginTop: 48,
        fontWeight: 'bold'
      }}>React</Text>
      <Text style={{ 
        color: '#FDFCFE',
        fontSize: 24
      }}>
        Native
      </Text>
    </View>
  )
}