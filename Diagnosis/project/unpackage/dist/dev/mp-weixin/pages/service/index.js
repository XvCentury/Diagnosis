"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_dtPicker2 = common_vendor.resolveComponent("dtPicker");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_dtPicker2 + _easycom_uni_popup2)();
}
const _easycom_dtPicker = () => "../../components/dtPicker/dtPicker.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_dtPicker + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    common_vendor.onLoad((options) => {
      main_load(options);
    });
    const service = common_vendor.ref([]);
    const hospitals = common_vendor.ref([]);
    const hospital_index = common_vendor.ref([]);
    const order = common_vendor.reactive({
      price: "",
      starttime: "",
      address: {
        userName: "",
        cityName: "",
        countyName: "",
        detailInfo: ""
      },
      receiveAddress: "",
      tel: "",
      demand: ""
    });
    const client = common_vendor.reactive({
      name: ""
    });
    const is_xieyi = common_vendor.ref(false);
    const cfg = common_vendor.reactive({
      page_xy: "",
      page_fw: ""
    });
    const popup = common_vendor.ref();
    const validMobile = common_vendor.reactive({
      phone: "",
      validMobile: ""
    });
    const countdown = common_vendor.reactive({
      validText: "获取验证码",
      time: 60
    });
    const main_load = (options) => {
      app.globalData.utils.request({
        url: "/Service/order",
        data: {
          svid: options.svid
        },
        success: (res) => {
          service.value = res.data.service;
          hospitals.value = res.data.hospitals;
          const hospitalsData = common_vendor.toRaw(hospitals.value);
          if (options.hid > 0) {
            for (let i = 0; i < hospitalsData.length; i++) {
              if (hospitalsData[i].id == options.hid) {
                hospital_index.value = i;
                order.price = hospitalsData[i].service_price;
                break;
              }
            }
          }
        }
      });
    };
    const handleTap = () => {
    };
    const onHospitalChange = (e) => {
      const value = parseInt(e.detail.value);
      hospital_index.value = value;
      order.price = common_vendor.toRaw(hospitals.value)[value].service_price;
    };
    const onStartTimeChanged = (e) => {
      order.starttime = e.detail.value;
    };
    const onClientChange = () => {
      common_vendor.index.navigateTo({
        url: "/pages/clients/index?act=select"
      });
    };
    common_vendor.index.$on("clientChange", (data) => {
      client.name = data.name;
      client.id = data.user_id;
      client.sex = data.sex;
      client.age = data.age;
      client.mobile = data.mobile;
    });
    const onXieyiChange = () => {
      is_xieyi.value = !is_xieyi.value;
    };
    const onAddressChange = () => {
      common_vendor.index.chooseAddress({
        success: (res) => {
          order.address.userName = res.userName;
          order.address.cityName = res.cityName;
          order.address.countyName = res.countyName;
          order.address.detailInfo = res.detailInfo;
        },
        fail: (res) => {
          console.log(res, "err");
        }
      });
    };
    const submit = () => {
      if (!is_xieyi.value) {
        return common_vendor.index.showToast({
          title: "请先阅读并同意用户协议和服务协议",
          icon: "none",
          duration: 1e3
        });
      }
      const orderData = common_vendor.toRaw(order);
      const serviceData = common_vendor.toRaw(service.value);
      const hospitalsData = common_vendor.toRaw(hospitals.value);
      const clientData = common_vendor.toRaw(client);
      if (serviceData.stype < 100) {
        if (hospital_index.value == 0) {
          return common_vendor.index.showToast({
            title: "请选择医院",
            icon: "none",
            duration: 1e3
          });
        }
        orderData.hospital_id = hospitalsData[hospital_index.value].id;
        orderData.hospital_name = hospitalsData[hospital_index.value].name;
      }
      if (!orderData.starttime) {
        return common_vendor.index.showToast({
          title: "请选择服务时间",
          icon: "none",
          duration: 1e3
        });
      }
      if (service.stype == 10 || service.stype == 15 || service.stype == 20) {
        if (!clientData.id) {
          return common_vendor.index.showToast({
            title: "请选择就诊人",
            icon: "none",
            duration: 1e3
          });
        }
        orderData.client = {};
        orderData.client.age = clientData.age;
        orderData.client.mobile = clientData.mobile;
        orderData.client.name = clientData.name;
        orderData.client.sex = clientData.sex;
        if (serviceData.stype == 15) {
          if (!orderData.receiveAddress) {
            return common_vendor.index.showToast({
              title: "请填写就诊人所在地址",
              icon: "none",
              duration: 1e3
            });
          }
        }
      }
      if (service.stype == 30 || service.stype == 40) {
        if (!orderData.address.userName) {
          return common_vendor.index.showToast({
            title: "请选择收件信息",
            icon: "none",
            duration: 1e3
          });
        }
      }
      if (!orderData.tel) {
        return common_vendor.index.showToast({
          title: "请填写联系方式",
          icon: "none",
          duration: 1e3
        });
      }
      if (!common_vendor.index.getStorageSync("token")) {
        popup.value.open("center");
      }
    };
    const cancal = () => {
    };
    const ok = () => {
    };
    let flag = false;
    const countdownChange = () => {
      if (!validMobile.phone) {
        return common_vendor.index.showToast({
          title: "请输入手机号",
          icon: "none",
          duration: 1e3
        });
      }
      if (flag)
        return;
      const time = setInterval(() => {
        if (countdown.time <= 0) {
          countdown.validText = "获取验证码";
          countdown.time = 60;
          flag = false;
          clearInterval(time);
        } else {
          countdown.time -= 1;
          countdown.validText = `剩余${countdown.time}s`;
        }
      }, 1e3);
      flag = true;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: service.value.icon_image ? service.value.icon_image_url : "../../static/resource/images/avatar.jpg",
        b: common_vendor.t(service.value.name),
        c: common_vendor.o(handleTap),
        d: service.value.stype == 10 || service.value.stype == 15 || service.value.stype == 20
      }, service.value.stype == 10 || service.value.stype == 15 || service.value.stype == 20 ? common_vendor.e({
        e: hospitals.value[hospital_index.value].name,
        f: common_vendor.o(onHospitalChange),
        g: hospital_index.value,
        h: hospitals.value,
        i: common_vendor.o(onStartTimeChanged),
        j: common_vendor.p({
          timestamp: order.starttime,
          placeholder: "请选择就诊时间"
        }),
        k: client.name,
        l: common_vendor.o(onClientChange),
        m: service.value.stype == 15
      }, service.value.stype == 15 ? {
        n: order.receiveAddress,
        o: common_vendor.o(($event) => order.receiveAddress = $event.detail.value)
      } : {}, {
        p: order.tel,
        q: common_vendor.o(($event) => order.tel = $event.detail.value),
        r: order.demand,
        s: common_vendor.o(($event) => order.demand = $event.detail.value)
      }) : {}, {
        t: service.value.stype == 30 || service.value.stype == 40
      }, service.value.stype == 30 || service.value.stype == 40 ? {
        v: hospitals.value[hospital_index.value].name,
        w: common_vendor.o(onHospitalChange),
        x: hospital_index.value,
        y: hospitals.value,
        z: common_vendor.o(onStartTimeChanged),
        A: common_vendor.p({
          timestamp: order.starttime,
          placeholder: "请选择期望服务时间"
        }),
        B: order.address.userName ? order.address.userName + "(" + order.address.cityName + order.address.countyName + order.address.detailInfo + ")" : "",
        C: common_vendor.o(onAddressChange),
        D: order.tel,
        E: common_vendor.o(($event) => order.tel = $event.detail.value),
        F: order.demand,
        G: common_vendor.o(($event) => order.demand = $event.detail.value)
      } : {}, {
        H: service.value.stype == 110
      }, service.value.stype == 110 ? {
        I: common_vendor.o(onStartTimeChanged),
        J: common_vendor.p({
          timestamp: order.starttime,
          placeholder: "请选择期望服务时间"
        }),
        K: client.name,
        L: common_vendor.o(onClientChange),
        M: order.receiveAddress,
        N: common_vendor.o(($event) => order.receiveAddress = $event.detail.value),
        O: order.tel,
        P: common_vendor.o(($event) => order.tel = $event.detail.value),
        Q: order.demand,
        R: common_vendor.o(($event) => order.demand = $event.detail.value)
      } : {}, {
        S: common_vendor.n("is_xieyi " + (is_xieyi.value ? "is_xieyi_on" : "")),
        T: common_vendor.o(onXieyiChange),
        U: cfg.page_xy,
        V: cfg.page_fw,
        W: order.price > 0
      }, order.price > 0 ? {
        X: common_vendor.t(order.price)
      } : {}, {
        Y: common_vendor.n("btnp " + (is_xieyi.value ? "" : "btnp-disabled")),
        Z: common_vendor.o(submit),
        aa: common_vendor.n("is_xieyi " + (is_xieyi.value ? "is_xieyi_on" : "")),
        ab: common_vendor.o(onXieyiChange),
        ac: cfg.page_xy,
        ad: cfg.page_fw,
        ae: order.price > 0
      }, order.price > 0 ? {
        af: common_vendor.t(order.price)
      } : {}, {
        ag: common_vendor.n("btnp " + (is_xieyi.value ? "" : "btnp-disabled")),
        ah: common_vendor.o(submit),
        ai: validMobile.phone,
        aj: common_vendor.o(($event) => validMobile.phone = $event.detail.value),
        ak: validMobile.validCode,
        al: common_vendor.o(($event) => validMobile.validCode = $event.detail.value),
        am: common_vendor.t(countdown.validText),
        an: common_vendor.o(countdownChange),
        ao: common_vendor.o(cancal),
        ap: common_vendor.o(ok),
        aq: common_vendor.sr(popup, "35c422da-3", {
          "k": "popup"
        }),
        ar: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false,
          ["background-color"]: "#fff"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/STUDIO/Git/GitHub/Diagnosis/Diagnosis/project/pages/service/index.vue"]]);
wx.createPage(MiniProgramPage);
