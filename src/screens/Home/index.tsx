import { Text, View, TextInput } from 'react-native'
import { styles } from './styles'

export function Home() {
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>
      <Text style={styles.eventDate}>
        08/01/2023
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  )
}