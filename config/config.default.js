/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const fs = require('fs')
const path = require('path')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611631924647_8265';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  // 静态资源配置
  config.static = {
    prefix: '/',
    buffer: false,
    preload: false
  };

  // 数据库配置
  config.mysql = {
    client: {
      host: '120.78.188.217',
      port: '3306',
      user: 'workercv_eggjs',
      password: 'qiVhQcLct1hx',
      database: 'workercv_eggjs',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 安全配置
  config.security = {
    csrf: {
      enable: true,
      headerName: 'x-csrf-token'
    }
  };

  //跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  return {
    ...config,
    ...userConfig,
  };
};
