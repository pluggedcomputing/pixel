import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import logo from '../../assets/images/logo_grey.png';
import tank from '../../assets/images/tank_white.png';
import BoxBackground from '../../components/BoxBackground/index';
import {colors} from '../../styles';
import styles from './styles';

function ScreenAbout() {
  const viewOfContent = [
    <View style={styles.viewBoxContent}>
      <Text style={styles.textContent}>
        O aplicativo Computação Plugada foi inspirado no livro de Bell, T.;
        Witten, I. e Fellows, M. (2011). “Computer Science Unplugged – Ensinando
        Ciência da Computação sem o uso do Computador”. Tradução de Luciano
        Porto Barreto, 2011.
      </Text>
    </View>,
    <View style={styles.viewBoxContent}>
      <Text style={styles.textContent}>
        Este livro apresenta atividades práticas, lúdicas e acessíveis sobre
        diversos temas da ciência da computação. O mesmo engloba técnicas fáceis
        para seu uso, tornando-se disponível para todos. Sua prática é fácil não
        só em salas de aula mas também fora, podendo ser administrado por
        professores e compreendido pelas crianças.
      </Text>
    </View>,
    <View style={styles.viewBoxContent}>
      <Text style={styles.textContent}>
        O aplicativo aqui apresentado busca simplificar ainda mais a aplicação
        das atividades propostas sem a necessidade de produção de materiais
        adicionais. O aplicativo é uma grande inovação para as técnicas de
        aprendizagem, apresentando temas complexos de uma forma elementar para o
        conhecimento.
      </Text>
    </View>,
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <Image source={logo} style={styles.logo} />
      <BoxBackground content={viewOfContent} />
      <Image source={tank} style={styles.tankTetris} />
      <View>
        <Text style={styles.credits}>
          Desenvolvido e mantido pela equipe do projeto Computação Plugada da
          UFPB campus IV e colaboradores de forma open source.
        </Text>
        <TouchableOpacity
          onPress={
            () =>
              Linking.openURL(
                'https://github.com/pluggedcomputing/pixel/blob/develop/LICENSE',
              )
            // eslint-disable-next-line react/jsx-curly-newline
          }>
          <Text style={[styles.credits, {textDecorationLine: 'underline'}]}>
            License MIT {new Date().getFullYear()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ScreenAbout;
