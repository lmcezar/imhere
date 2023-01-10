import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export function Home() {

  function handleParticipantAdd() {
    console.log('Você clicou no botão de adicionar')
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>
      <Text style={styles.eventDate}>
        08/01/2023
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Lucas Cezar" />
      <Participant name="Joyce Pontes" />
    </View>
  )
}