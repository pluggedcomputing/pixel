import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useRoute} from '@react-navigation/native';
import Animation from 'lottie-react-native';

import animation from '../../assets/animations/CheckedDone.json';
import animationWin from '../../assets/images/level4/win.json';
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
          <Icon name="check-circle-o" size={30} color={colors.colorSucess} />
          <Text style={styles.textInformation}>{item}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.8)"
      />
      <View style={styles.content}>
        <Text style={styles.textTop}>Parabéns</Text>
        <Text style={styles.textEnd}>Você concluiu o nível {level}</Text>
        <ScrollView>
          <Animation
            source={animation}
            style={styles.animation}
            autoPlay
            loop
          />
          {showInformation()}
        </ScrollView>
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
              {`Você completou todos os níveis!\nConheça nossos outros aplicativos.\nAcesse a seção 'Sobre' para ter mais informações.`}
            </Text>
            <Animation
              source={animationWin}
              style={styles.imgWin}
              autoPlay
              loop
            />
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
