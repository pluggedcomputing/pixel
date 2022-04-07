import React from 'react';
import {Text, SafeAreaView, ScrollView, Linking} from "react-native";
// import imageHelp from '../../assets/images/helpScreen/image-help.png';

import styles from './styles';

function HelpScreen (){
  return(
    <SafeAreaView>
      <ScrollView>
        <Text>
          <br />
          Para navegar entre as telas com textos ou exercícios, use as setas encontradas na parte central da tela, à esquerda e à direita.<br />

          A partir da fase 2,  as fases estão bloqueadas. Isso significa que você terá de completar uma fase anterior para passar para a fase seguinte.<br />

          Em cada fase você encontrará telas com conteúdo informativo e também algumas telas com exercícios.<br />

          Você encontrará dois tipos de exercícios: questões de múltipla escolha tradicionais ou questões onde poderá interagir com uma grade de pixels. No primeiro tipo, poderá marcar a alternativa que considerar correta com base no conteúdo apresentado. No segundo, poderá visualizar uma grade, representando pixels e bastará tocar em um quadrinho para o colorir ou descolorir. Depois de pintar, deve escolher uma das alternativas.<br />

          Você poderá repetir as atividades a qualquer momento para melhorar seu desempenho em cada fase.<br />

          Para mais informações, entre em contato conosco através do e-mail: <Text style={styles.link} onPress={() => {Linking.openURL('mailto:computacaoplugada@dcx.ufpb.br');}}>computacaoplugaga@dcx.ufpb.br</Text>. Estamos trabalhando continuamente para melhorar a experiência dos nossos usuários. Seu feedback é muito importante. Ajude-nos preenchendo formulários de avaliação disponíveis no site do projeto: <Text style={styles.link} onPress={() =>{Linking.openURL('https://sites.google.com/view/computacaoplugada/aplicativos/cp-pixel');}}>https://sites.google.com/view/computacaoplugada/aplicativos/cp-pixel</Text>.

        </Text>
      </ScrollView>
    </SafeAreaView>

  )
}
export default HelpScreen;
