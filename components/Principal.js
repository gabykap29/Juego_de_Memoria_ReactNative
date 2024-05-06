import {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { shuffle } from '../utils/arrayFunction';
const cards = [
  '🎃', '👻', '🤖', '👾', '🤡', '👽', '👺',
]


export default function Principal() {
  const [board, setBoard] = useState(()=> shuffle([...cards, ...cards]))
  const [selevtedCard, setSelectedCard] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    //si no hay dos cartas seleccionadas, no hagas nada
    if (selevtedCard.length < 2) {
      return;
    }
  //si las cartas seleccionadas son iguales, déjalas volteadas
    if (board[selevtedCard[0]] === board[selevtedCard[1]]) {
      setMatchedCards([...matchedCards, ...selevtedCard]);
      setScore(score + 1)
      setSelectedCard(
        board.map((card, index) =>
          matchedCards.includes(card) ? index : index // keep matched cards flipped
        )
      );
    // si score es igual a 10, reinicia el juego
    }if(score >= 5){
      setSelectedCard([])
      setMatchedCards([])
      setScore(0)
      setBoard(shuffle([...cards, ...cards]))
    } 
    else {
      const timeoutId = setTimeout(() => setSelectedCard([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selevtedCard]); 
  
  
  
  const handleTapCard = (index) =>{
    //si la carta ya está volteada o ya fue emparejada, no hagas nada
    if(selevtedCard.length >= 2 || selevtedCard.includes(index)){
      return
    }
    //voltea la carta
    setSelectedCard([...selevtedCard, index])
  }
  const didPlayerWin = () =>{
    if(score === 5){
      return true
    }
  }
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>{didPlayerWin() ? "Usted Ganó! 🎉": "Juego de Memoria"}</Text>
      <Text style={styles.title}>Score: {score}</Text>
      <View style={styles.board}>
      {board.map((card, index)=>{
        //determina si la carta está volteada
        const isTurnedOver = selevtedCard.includes(index) || matchedCards.includes(card)
         return (
          <Card 
          key={index}
          isTurnedOver={isTurnedOver}
          onPress={()=> handleTapCard(index)}
          >
            {card}
         </Card>
         )
      })}
     </View>
      <StatusBar style='light' backgroundColor='#0f172a' />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    color: 'white',
    fontWeight:"900",
  },
  board:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',
  }
});