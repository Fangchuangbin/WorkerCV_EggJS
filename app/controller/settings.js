'use strict';

const Controller = require('egg').Controller;

class SettingsController extends Controller {
  async head() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      message: 'success',
      data: {
        title: '极速简历 WorkerCV - HR推荐智能简历工具,实习生简历模板,求职简历模板下载',
        keywords: '极速简历,简历模板工具,求职简历模板,实习生简历模板',
        description: '极速简历WorkerCV提供各行业求职简历模板免费下载,是一个专业的智能简历制作工具.还有智能简历优化建议和求职简历定制服务,以及大量简历制作攻略和求职攻略.'
      }
    }
  }
}

module.exports = SettingsController;
