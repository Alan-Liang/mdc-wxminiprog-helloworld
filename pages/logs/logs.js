//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return typeof log === "number" ?
          util.formatTime(new Date(log)) :
          log;
      })
    })
  },
  back:function(){
    wx.navigateBack();
  },
  addRecord:function() {
    wx.createSelectorQuery()
      .select("#text")
      .fields({
        properties:["value"]
      },function(res) {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(res.value);
        wx.setStorageSync('logs', logs);
      })
      .exec();
  }
})
