import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  Modal,
  Linking,
  Image
} from 'react-native';

import {useRoute} from '@react-navigation/native';

import imageWinner from '../../assets/images/congratulations/winner.png';
import {colors} from '../../styles';
import styles from './styles';

const Congratulations = (props) => {
  const {level, content, isFinish} = useRoute().params;
  const [modal, setModal] = useState(false);
  const {navigation} = props;

  const navigateScreen = (screen) => {
    navigation.navigate(screen);
  };

  const showInformation = () => {
    return content.map((item, index) => {
      return (
        <View key={[index]} style={styles.information}>
          <Text style={styles.textInformation}>{item}</Text>
        </View>
      );
    });
  };

  const linkingWeb = (url, nickName) => {
    return (
      <TouchableNativeFeedback
        onPress={() => {
          Linking.openURL(url);
        }}>
        <Text style={styles.titleWeb}>{nickName}</Text>
      </TouchableNativeFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.colorPrimary}
      />
      <View style={styles.content}>
        <Image source={imageWinner} style={styles.imageWinner} />
        <Text style={styles.textTop}>Você concluiu a</Text>
        <Text style={styles.textEnd}>FASE {level}</Text>
        <View style={styles.informationPosition}>
          {showInformation()}
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonAlternative}
        onPress={() => {
          if (isFinish) {
            setModal(isFinish);
          } else {
            navigateScreen('LevelSelection');
          }
        }}>
        <Text style={styles.textButton}>Finalizar</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Parabéns</Text>
            <Text style={styles.modalSubTitle}>
              {`Você completou todos os níveis!\nConheça nossos outros aplicativos acessendo a seção 'Sobre'.\nVocê pode nos ajudar com o seu feedback sejá `}
              {linkingWeb(
                'https://docs.google.com/forms/d/1BWbFRUlRG-rOEC_2cA_WhZGqpwppArlj8rozMHowXHo/viewform?edit_requested=true',
                'aluno ',
              )}
              ou
              {linkingWeb(
                'https://docs.google.com/forms/d/10OBwQfXVbWkKh67Zi286eBkA5_tAmgIzujecnX9TQS0/viewform?ts=6159e3c3&edit_requested=true',
                ' profissional',
              )}
            </Text>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={styles.buttonConcluded}
                onPress={() => navigateScreen('LevelSelection')}>
                <Text style={styles.textBtnConcluded}>Concluir</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonAbout}
                onPress={() => {
                  setModal(!modal);
                  navigation.popToTop();
                  navigateScreen('ScreenAbout');
                }}>
                <Text style={styles.textBtnAbout}>Sobre</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Congratulations;
