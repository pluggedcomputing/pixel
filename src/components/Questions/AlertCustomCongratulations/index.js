import React, {useEffect} from 'react';
import {View, Modal, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const AlertCustomCongratulations = (props) => {
  const {visible, setVisibleFunc} = props;

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisibleFunc(false);
      }, 2000);
    }
  }, [visible]);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisibleFunc(false);
        }}>
        <View style={styles.container}>
          <View style={styles.boxContainer}>
            <Text> Parabéns, você acertou</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

AlertCustomCongratulations.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisibleFunc: PropTypes.func.isRequired,
};

export default AlertCustomCongratulations;
