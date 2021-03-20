import React, {useState, useEffect} from 'react';
import {View, Image, StatusBar, Text} from 'react-native';

import BoxAlternative from "../../../components/BoxAlternative";
import BoxBackground from '../../../components/BoxBackground';
import {MultipleChoice} from '../../../components/Questions';
import {colors} from '../../../styles';
import styles from './styles';

const Level1 = ({navigation}) => {
  const responseAll = {
    level: 1,
    questions: [
      {
        type: 'INTRO',
        id: 1,
        text:
          'Você sabia que os computadores armazenam desenhos, fotografias e outras imagens usando apenas números? Nos desafios propostos a seguir entenderemos melhor como isso acontece.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 2,
        text:
          'Você sabia que as telas dos computadores são divididas em uma grade de pequenos pontos chamados pixels? Em uma foto preto e branco, cada pixel ou é preto ou é branco.',
        img: require('../../../assets/images/img_pixel.png'),
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 3,
        text:
          'As telas dos computadores são divididas em uma grade de pequenos quadrados, cada um dos quais pode exibir uma cor. Chamamos esses quadrados de elementos de imagem ou pixels.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 4,
        text: 'Em uma imagem em preto e branco, cada pixel pode ser preto ou branco, então tudo que o computador precisa armazenar é quais pontos são pretos e quais são brancos.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 5,
        text: 'Podemos representar essa imagem usando dígitos binários (bits). Se 1 indica um quadrado branco e um 0 indica um quadrado preto, então podemos representar nossa letra C, em uma grade de 5x6 pixels, assim:',
        img: require('../../../assets/images/Level1/Cpixelbin.png'),
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 6,
        text:
          'Você já viu um aparelho de fac-símile (fax)? Esse aparelho era muito utilizado antigamente para o envio de documentos em preto e branco.',
        img: require('../../../assets/images/img_pixel.png'),
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 7,
        text: 'Uma máquina de fax é basicamente um computador simples que efetua uma varredura sobre uma página em preto e branco, armazena- a em, aproximadamente, 1000 × 2000 pixels. Depois são transmitidos através de um modem para outra máquina de fax.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 8,
        text: 'Esta última, por sua vez, imprime os pixels em uma página.',
        img: require('../../../assets/images/Level1/fax.png'),
        enableScroll: true,
      },
      {
        id: 9,
        type: 'QUEST',
        enable: false,
        invisibleRow: -1,
        description:
        'Como você acha que eram enviadas estas mensagens?',
        img: require('../../../assets/images/fax.png'),
        enableScroll: false,
        paintContent: [],
        alternatives: [
          {
            id: '1',
            text: ' Representando pontos pretos com 0 e brancos com 1',
            correct: false,
          },
          {
            id: '2',
            text:
              'Utilizando uma representação que economize a quantidade de dados enviados',
            correct: true,
          },
        ],
      },
      {
        type: 'INTRO',
        id: 10,
        text: 'Para economizar no armazenamento e transmissão de dados, é mais interessante utilizar uma representação dos dados que economize a quantidade de informação transmitida ou armazenada.',
        img: null,
        enableScroll: true,
      },
      {
        id: 11,
        type: 'QUEST',
        enable: false,
        invisibleRow: -1,
        description:
        "Considerando o que foi apresentado, responda: O que as máquinas de fax fazem?",
        img: null,
        enableScroll: false,
        paintContent: [],
        alternatives: [
          {
            id: '1',
            text: 'Realizam operações matemáticas',
            correct: false,
          },
          {
            id: '2',
            text: 'Editam imagens',
            correct: false,
          },
          {
            id: '3',
            text: 'São usadas para redimensiona pixels',
            correct: false,
          },
          {
            id: '4',
            text: 'Imprimem pixels',
            correct: true,
          },
        ],
      },
      {
        id: 12,
        type: 'QUEST',
        enable: false,
        invisibleRow: -1,
        description:
        'Como funciona o armazenamento das imagens no computador?',
        img: null,
        enableScroll: false,
        paintContent: [],
        alternatives: [
          {
            id: '1',
            text: 'Por meio de números decimais',
            correct: false,
          },
          {
            id: '2',
            text: 'Por meio de números octais',
            correct: false,
          },
          {
            id: '3',
            text: 'Por meio de números binários',
            correct: true,
          },
          {
            id: '4',
            text: 'Por meio de números hexadecimais',
            correct: false,
          },
        ],
      },
      ]
    };

  const [step, setSteps] = useState(0);
  const [exercise] = useState(responseAll);
  const [question, setQuestion] = useState(exercise.questions[step]);
  const maxStep = exercise.questions.length;
  const finishLevel = step === maxStep;
  const [nextCard, setNextCard] = useState(false);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 1,
        content: [
          'Entende o funcionamento do fax',
          'Entende como uma imagem criada por você pode ser representada com números binários.',
          'Entende a necessidade de utilizar menos dados para representar imagens e documentos',
        ],
      });
    } else {
      setQuestion(exercise.questions[step]);
    }
  }, [step]);

  const viewContent = () => {
    const content = exercise.questions.map((item) => (
      item.type === "INTRO" ? (
        <View style={styles.viewBoxContent}>
          <Text style={styles.contentText}>{item.text}</Text>
          <Image style={styles.statementImage} source={item.img} />
        </View>
    ) : (
      <View style={styles.viewBoxContent}>
        <Text style={styles.contentText}>{item.description}</Text>
        <Image style={styles.statementImage} source={item.img} />
      </View>
    )
    ));
    return content;
  };

  const setAnswerCorrectInQuestion = (isCorrect) => {
    if(isCorrect){
      exercise.questions[step].enableScroll = isCorrect;
      setNextCard(true);
      }
  }

  const BoxContent = () => (
    <>
      <View style={styles.halfTopView}>
        <BoxBackground
          content={viewContent()}
          setSteps={setSteps}
          style={styles.boxContainer}
          scrollEnabled={question.enableScroll}
          nextQuestion={nextCard}
          setNextQuestion={setNextCard}
        />
      </View>
      <BoxAlternative
        alternativesContent={(
          question.type === 'QUEST' ?  (
            <>
              <Text style={styles.textAnswer}>Selecione a opção correta</Text>
              <View style={styles.contentContainerStyle}>
                <MultipleChoice
                  step={step}
                  isAnswer={question.enableScroll}
                  setSteps={setSteps}
                  alternatives={question.alternatives}
                  setCorrectAnswer={setAnswerCorrectInQuestion}
            />
              </View>
            </>
 ) : null
)}
        isLastPage={(question.type !== 'QUEST')}
        textInfor="Arraste o card acima para o lado para continuar." />
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      {BoxContent()}
    </View>
  );
};

export default Level1;
