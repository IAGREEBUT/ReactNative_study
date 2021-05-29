/**
 * @format
 */

//앱의 메인 입구

//레지스터리 import
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//새로운 컴포넌트를 등록함 (앱이름 , 앱을 시작할 때 랜더링 되는 것)
AppRegistry.registerComponent(appName, () => App);
