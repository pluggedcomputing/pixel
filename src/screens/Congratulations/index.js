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
  Image,
  Alert
} from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';

import {useRoute} from '@react-navigation/native';


import data from '../../assets/data.json';
import imageWinner from '../../assets/images/congratulations/winner.png';
import {colors} from '../../styles';
import Exercises from '../Exercises/index';
import styles from './styles';

const Congratulations = (props) => {
  const {level, content} = useRoute().params;// isFinish
  const [modal, setModal] = useState(false);
  const {navigation} = props;

  const restartPhase = async() =>{
    Alert.alert(toString(Exercises));
  }

  // const to share the image of congratulations.
  const shareCongratulations = async() =>{
    const ShareOptions={
      message: 'texto vai aqui',
    }
    try{
      // eslint-disable-next-line no-unused-vars
      const ShareResponse = await Share.open(ShareOptions);
    }catch(error){
      Alert.alert(
        'oops',
        'Houve um problema ao compartilhar.'
        );
    }
  };

  const navigateScreen = (screen) => {
    navigation.navigate(screen);
  };

  Icon.loadFont();

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
  const size = 30;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.colorPrimary}
      />
      <View style={styles.content}>
        <View style={styles.containerBtnConcluded}>
          <Text style={styles.textBtnConcluded}>FASE {level}</Text>
          {/* Congratulation screen exit button for Level Selection */}
          <TouchableOpacity
            style={styles.buttonConcluded}
            onPress={() => navigation.navigate('LevelSelection')}>
            <Icon style={styles.iconConcluded} name='close' />
          </TouchableOpacity>
        </View>
        <Image source={imageWinner} style={styles.imageWinner} />
        <Text style={styles.textTop}>Você concluiu a</Text>
        <Text style={styles.textEnd}>FASE {level}</Text>
        <View style={styles.informationPosition}>
          {showInformation()}
        </View>
      </View>
      <View style={styles.boxButtons}>
        <View style={styles.textAndBtn}>
          {/* share button */}
          <TouchableOpacity
            onPress={shareCongratulations}
            style={styles.buttonsShare}>
            <Icon name='share-social-outline' size={size} color={colors.colorAccent} />
          </TouchableOpacity>
          <Text style={styles.textBtn}>Compartilhar</Text>
        </View>
        <View style={styles.textAndBtn}>
          {/* phase reset button */}
          <TouchableOpacity
            style={styles.buttonsShare}
            onPress={restartPhase}
            >
            <Icon name='refresh' size={size} color={colors.colorAccent} />
          </TouchableOpacity>
          <Text style={styles.textBtn}>Refazer</Text>
        </View>
        <View style={styles.textAndBtn}>
          {/* button to return to phase screen */}
          <TouchableOpacity
            style={styles.buttonsShare}
            onPress={() =>
              navigation.goBack('Exercises', {data: data.exercises[level]})}

          >
            <Icon name='chevron-forward-outline' size={size} color={colors.colorAccent} />
          </TouchableOpacity>
          <Text style={styles.textBtn}>Próxima Fase</Text>
        </View>
      </View>

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
          <TouchableOpacity
            onPress={shareCongratulations}>
            <Text style={styles.button}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Congratulations;


