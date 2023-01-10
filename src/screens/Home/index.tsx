import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export function Home() {

  const participants = ['Lucas', 'Joyce', 'Shyriu', 'Zack', 'Ozorio', 'Valdeci', 'Ana', 'Myke', 'Diego'];

  function handleParticipantAdd() {
    if(participants.includes('Lucas')) {
      return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome.')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Removido!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
      <FlatList  
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}