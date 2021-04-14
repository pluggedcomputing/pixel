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
          'As telas dos computadores são divididas em uma grade de pequenos quadrados, cada um dos quais pode exibir uma cor. Chamamos esses quadrados de elementos de imagem ou pixels.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 3,
        text: 'Em uma imagem em preto e branco, cada pixel pode ser preto ou branco, então tudo que o computador precisa armazenar é quais pontos são pretos e quais são brancos.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 4,
        text: 'Uma imagem correspondente à letra C, por exemplo, poderia ser representada com números binários (bits). Se o 1 indica um quadrado branco e o 0 indica um quadrado preto, então poderíamos ter uma grade de 5x6 pixels como a ilustrada abaixo:',
        img: require('../../../assets/images/Level1/Cpixelbin.png'),
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 5,
        text:
          'Você já viu um aparelho de fac-símile (fax)? Esse aparelho era muito utilizado antigamente para o envio de documentos em preto e branco.',
          img: require('../../../assets/images/Level1/fax.jpg'),
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 6,
        text: 'Uma máquina de fax é basicamente um computador simples que efetua uma varredura sobre uma página em preto e branco, armazena-a em, aproximadamente, 1000 × 2000 pixels, que são transmitidos através de um modem para outra máquina de fax.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 7,
        text: 'Quando a outra máquina de fax recebe a mensagem, ela imprime os pixels em uma página.',
        img: require('../../../assets/images/Level1/fax.jpg'),
        enableScroll: true,
      },
      {
        id: 8,
        type: 'QUEST',
        enable: false,
        invisibleRow: -1,
        description:
        'Como você acha que eram codificadas as mensagens enviadas através de uma máquina de fax?',
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
        id: 9,
        text: 'Para economizar no armazenamento e transmissão de dados, é mais interessante utilizar uma representação dos dados que economize a quantidade de informação transmitida ou armazenada.',
        img: null,
        enableScroll: true,
      },
      {
        id: 10,
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
            text: 'Transmitem mensagens de áudio',
            correct: false,
          },
          {
            id: '4',
            text: 'Imprimem pixels',
            correct: true,
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
  const idQuestionFist = 1;
  const [questionEnabled] = useState([idQuestionFist]);


  const isAnswered = () => {
    return  step < maxStep && questionEnabled.includes(exercise.questions[step].id);
  }

  const insertAnswer = () => {
    if(!isAnswered()){

      questionEnabled.push(exercise.questions[step].id);

    }
  }

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 1,
        content: [
          'Entende o funcionamento do fax',
          'Entende que as telas dos computadores são divididas em uma grade de pequenos pontos (pixels)',
        ],
      });
    } else {

      if(exercise.questions[step].type === 'INTRO'){
        insertAnswer();
      }

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
      insertAnswer();
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
          scrollEnabled={isAnswered()}
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
                  isAnswer={isAnswered()}
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