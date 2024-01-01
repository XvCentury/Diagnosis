"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  //请求url中的公共部分
  constructor() {
    this.baseUrl = "http://159.75.169.224:7300/pz";
  }
  //获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: (res) => {
        console.log(res);
        this.request({
          url: "/auth/wxLogin",
          data: {
            code: res.code
          },
          success: (res2) => {
            console.log(res2, "res");
          }
        });
      }
    });
  }
  //请求封装
  request(option = {
    showLoading: false
  }) {
    if (!option.url) {
      return false;
    }
    if (option.showLoading) {
      this.showLoading();
    }
    common_vendor.index.request({
      url: this.baseUrl + option.url,
      data: option.data ? option.data : {},
      header: option.header ? option.header : {},
      method: option.method ? option.method : "GET",
      success: (response) => {
        common_vendor.index.hideLoading();
        if (response.data.code != 1e4) {
          if (option.fail && typeof option.fail == "function") {
            option.fail(response);
          }
        } else {
          if (option.success && typeof option.success == "function") {
            option.success(response.data);
          }
        }
      },
      fail: (response) => {
        common_vendor.index.hideLoading();
        console.log(response);
      }
    });
  }
  //loading效果
  showLoading() {
    const isShowLoading = common_vendor.index.getStorageInfoSync("isShowLoading");
    if (isShowLoading) {
      common_vendor.index.hideLoading();
      common_vendor.index.setStorageSync("isShowLoading", false);
    }
    common_vendor.index.showLoading({
      titel: "加载中...",
      complete: () => {
        common_vendor.index.setStorageSync("isShowLoading", true);
      },
      fail: () => {
        common_vendor.index.setStorageSync("isShowLoading", false);
      }
    });
  }
}
const Utils$1 = new Utils();
exports.Utils = Utils$1;
