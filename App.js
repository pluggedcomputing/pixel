import React from 'react';
import codePush from 'react-native-code-push';

import 'react-native-gesture-handler';
import Routes from './src/routes';

const App = () => {
  return <Routes />;
};

const appCodePush = codePush(App);

export default appCodePush;
