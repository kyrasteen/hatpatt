import { NativeModules } from 'react-native';
import url from 'url';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

Reactotron.configure({ host: hostname }) // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
