import RequestHelper from '../helpers/request.helper';
import { appConfig } from '../config/app.config';

export default class Api {
  static signup(data) {
      return RequestHelper.post(appConfig.apiUrl + 'users/signup', data);
  }
  static login(data) {
    return RequestHelper.post(appConfig.apiUrl + 'users/login', data);
}
}