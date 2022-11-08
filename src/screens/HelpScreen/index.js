import React from 'react';
import {Text, SafeAreaView, Image, ScrollView, Linking, View} from "react-native";

import imageHelp from '../../assets/images/helpScreen/image-help.png';
import styles from './styles';

function HelpScreen (){
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image style={styles.image} source={imageHelp} />
          <Text style={styles.text}>
            Para navegar entre as telas com textos ou exercícios, use as setas encontradas na parte central da tela, à esquerda e à direita.
          </Text>

          <Text style={styles.text}>
            A partir da fase 2,  as fases estão bloqueadas. Isso significa que você terá de completar uma fase anterior para passar para a fase seguinte.
          </Text>

          <Text style={styles.text}>
            Em cada fase você encontrará telas com conteúdo informativo e também algumas telas com exercícios.
          </Text>

          <Text style={styles.text}>
            Você encontrará dois tipos de exercícios: questões de múltipla escolha tradicionais ou questões onde poderá interagir com uma grade de pixels.
          </Text>

          <Text style={styles.text}>
            No primeiro tipo, poderá marcar a alternativa que considerar correta com base no conteúdo apresentado.
          </Text>

          <Text style={styles.text}>
            No segundo, poderá visualizar uma grade, representando pixels e bastará tocar em um quadrinho para o colorir ou descolorir. Depois de pintar, deve escolher uma das alternativas.
          </Text>

          <Text style={styles.text}>
            Você poderá repetir as atividades a qualquer momento para melhorar seu desempenho em cada fase.
          </Text>

          <Text style={styles.text}>
            Para mais informações, entre em contato conosco através do e-mail: <Text style={styles.link} onPress={() => {Linking.openURL('mailto:computacaoplugada@dcx.ufpb.br');}}>computacaoplugada@dcx.ufpb.br</Text>.
          </Text>

          <Text style={styles.text}>
            Estamos trabalhando continuamente para melhorar a experiência dos nossos usuários. Seu feedback é muito importante. Ajude-nos preenchendo formulários de avaliação disponíveis no site do projeto: <Text style={styles.link} onPress={() =>{Linking.openURL('https://sites.google.com/view/computacaoplugada/aplicativos/cp-pixel');}}>https://sites.google.com/view/computacaoplugada/aplicativos/cp-pixel</Text>.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}
export default HelpScreen;
