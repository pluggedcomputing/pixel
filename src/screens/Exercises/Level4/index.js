import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';

import BoxBackground from '../../../components/BoxBackground';
import ChoiceButton from '../../../components/ChoiceButton';
import {colors} from '../../../styles';
import styles from './styles';

const DATAINFOR = [
  {
    id: '1',
    title: [
      {
        id: '1',
        text:
          'Uma máquina de fax é basicamente um computador simples que efetua uma varredura sobre uma página em preto e branco, armazena-a em, aproximadamente, 1000 × 2000 pixels, que são transmitidos através de um modem para outra máquina de fax. Esta última, por sua vez, imprime os pixels em uma página. Imagens impressas por fax geralmente têm grandes blocos de pixels brancos (por exemplo, as margens) ou pretos (por exemplo, uma linha horizontal). ',
      },
      {
        id: '2',
        text:
          'Imagens coloridas também possuem áreas repetidas. A fim de economizar o espaço de armazenamento necessário para guardar essas imagens, os programadores podem usar diversas técnicas de compressão. O método utilizado nesta atividade é chamado de ‘run-length coding’, uma maneira eficaz de compressão de imagens. Se as imagens não fossem comprimidas, estas levariam muito mais tempo para serem transmitidas e exigiriam muito mais espaço para armazenamento. Isto tornaria inviável enviar páginas de fax ou colocar fotos em uma página da Internet. ',
      },
      {
        id: '3',
        text:
          'Por exemplo, imagens de fax eram geralmente comprimidas para aproximadamente um sétimo do seu tamanho original. Sem a compressão, estas demorariam sete vezes mais para serem transmitidas! Lembre-se de que as velocidades de transmissão não eram tão boas antigamente como as que temos hoje.',
      },
      {
        id: '4',
        text:
          'Fotografias e imagens são freqüentemente comprimidas para um décimo ou até mesmo um centésimo do seu tamanho original (utilizando uma técnica diferente). Isto permite que um número bem maior de imagens seja armazenado em um disco e significa que vê- las na Internet levará bem menos tempo. Um programador pode escolher a técnica mais adequada à compressão das imagens que está transmitindo.',
      },
    ],
    alternatives: [
      {
        id: '1',
        title: 'Enviar',
        correct: true,
      },
    ],
  },
];

const Level4 = ({navigation}) => {
  const [isLastPage, setIsLastPage] = useState(false);

  const [step, setSteps] = useState(0);

  const maxStep = DATAINFOR.length;
  const finishLevel = step === maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 4,
        content: ['Entende a necessidade de comprimir dados'],
      });
    }
  }, [step]);

  const BoxContent = () => (
    <>
      <View style={styles.halfTopView}>
        <BoxBackground
          content={DATAINFOR[0].title.map((item) => (
            <View style={styles.viewBoxContent}>
              <Text style={styles.textBoxContent}>{item.text}</Text>
            </View>
          ))}
          isLastPage={setIsLastPage}
        />
      </View>
      <View style={styles.halfBottomView}>
        {!isLastPage ? (
          <Text style={styles.defaultText}>
            Leia atentamente cada questão para que possa responder o que é
            solicitado em cada exercício. Arraste o card para o lado e verá as
            próximas instruções.
          </Text>
        ) : (
          <ChoiceButton
            style={styles.buttons}
            step={step}
            text={DATAINFOR[0].alternatives[0].title}
            correct={DATAINFOR[0].alternatives[0].correct}
            onPress={() => {
              if (DATAINFOR[0].alternatives[0].correct) {
                setSteps(step + 1);
              }
            }}
          />
        )}
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      {BoxContent()}
    </View>
  );
};

export default Level4;
