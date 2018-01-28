import { NativeModules } from 'react-native';
import url from 'url';
import Reactotron from 'reactotron-react-native';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

Reactotron.configure({ host: hostname }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
