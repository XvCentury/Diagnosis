"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.reactive([
      { name: "apple", num: 1 },
      { name: "orange", num: 2 },
      { name: "banana", num: 3 }
    ]);
    const title = common_vendor.ref("Hello");
    const handleClick = () => {
      list.forEach((item) => {
        item.num++;
      });
    };
    common_vendor.onLoad(() => {
      console.log("onLoad生命周期");
    });
    const totalNum = common_vendor.computed(() => {
      return list.reduce((total, cur) => total + cur.num, 0);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(handleClick),
        c: common_vendor.t(common_vendor.unref(totalNum)),
        d: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.num
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/STUDIO/uniapp/Diagnosis/project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
