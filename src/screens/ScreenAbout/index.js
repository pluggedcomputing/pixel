import React from 'react';
import {
  View,
  // StatusBar,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  ScrollView
} from 'react-native';

import logo from '../../assets/images/horizontal-logo.png';
import binariesImage from '../../assets/images/screenAbout/btn-binarios.png';
import ordinationImage from '../../assets/images/screenAbout/btn-ordenacao.png';
// import apps from '../../assets/images/logo_name.png';
import tarja from '../../assets/images/screenAbout/tarja-pixel-1.png';
import unplug from '../../assets/images/screenAbout/unplug-pixel-1.png';
import {metrics} from '../../styles';
import styles from './styles';



function ScreenAbout() {
  return (
    <ScrollView style={styles.backgroundColor}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text}> O aplicativo &ldquo;Computação Plugada - Pixel se baseia na atividade
            &ldquo;Representação de imagens&ldquo; do livro de Bell T.Witten, I. e Follows, M.
            (2011), &ldquo;Computer Science Unplugged - Ensinando Ciência da Computação sem o uso
            do computador&ldquo; Tradução Luciano Porto Barreto, 2011
          </Text>
        </View>
        <View style={styles.container}>
          <Image source={unplug} style={styles.imgCenter} />
          <Text style={styles.text}> Este livro apresenta ativades práticas, lúdicas e acessíveis sobre diversos
            temas da ciência da computação. O mesmo engloba técnicas para todos. Sua prática
            é fácil não só em salas de aula mas também fora, podendo ser administrado por professores
            e compreendido pelas crianças.
          </Text>
        </View>
        <View style={styles.container}>
          <Image source={tarja} style={styles.imgCenter} />
          <Text style={styles.text}> O aplicativo aqui apresentado busca simplificar ainda mais a aplicação das
            propostas sem a necessidade de produção em materiais adicionais. O aplicativo é
            uma grande inovação para as técnicas  de, aprendizagem, apresentando temas complexos
            de uma forma elementar para o conhecimento.
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.subContainerBoxContent}>
            <TouchableOpacity
              style={styles.btnApps}
              onPress={() => {
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=com.pluggedcomputing.mobile',
                );
              }}>
              <Image
                source={binariesImage}
                style={[styles.imgSite, {width: metrics.screenWidth}]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnApps}
              onPress={() => {
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=br.ufpb.dcx.computacaoplugada.sortingalgorithms',
                );
              }}>
              <Image
                source={ordinationImage}
                style={[styles.imgSite, {width: metrics.screenWidth}]}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}> O aplicativo Pixel faz parte de uma família com vários outros aplicativos.
            Conheça mais sobre os demais clicando na imagem abaixo.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}


export default ScreenAbout;