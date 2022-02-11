import axios from 'axios';
import qs from 'qs';
import cookie from 'react-cookies';

const instance = axios.create({
  timeout: 100000,
});

const handleError = (e) => {
  if (e.response.status === 401 || e.response.status === 403) {
    window.location = '/login';
  }
};

export default class RequestHelper {
  static async getHeader(config = {}) {
    let authorize = ``;
    if (cookie.load('token')) {
      authorize = `Bearer ${cookie.load('token').access_token}`;
    } else {
      console.log('Token expired');
    }
    return {
      accept: 'application/json',
      contentType: 'application/json',
      // 'x-access-token': cookie.load('token'),
      Authorization: authorize,
      ...config,
    };
  }
  static async get(apiUrl, params) {
    console.log(apiUrl);
    const header = await this.getHeader();
    return instance
      .get(apiUrl, {
        headers: header,
        params,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
      })
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        handleError(e);
        throw e;
      });
  }
  static async post(apiUrl, data, config) {
    return instance({
      method: 'post',
      url: apiUrl,
      headers: await this.getHeader(config),
      data: data,
    })
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        handleError(e);
        throw e;
      });
  }
  static async put(apiUrl, data) {
    return instance({
      method: 'put',
      url: apiUrl,
      headers: await this.getHeader(),
      data: data,
    })
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        handleError(e);
        throw e;
      });
  }
  static async delete(apiUrl, data) {
    return instance({
      method: 'delete',
      url: apiUrl,
      headers: await this.getHeader(),
      data: data,
    })
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        handleError(e);
        throw e;
      });
  }

  static async postAndDownloadPDF(apiUrl, data) {
    return instance({
      method: 'post',
      url: apiUrl,
      headers: {
        accept: 'application/pdf',
        contentType: 'application/json',
        'Access-Token': cookie.load('token'),
      },
      responseType: 'blob',
      data: data,
    })
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        handleError(e);
        throw e;
      });
  }
}
