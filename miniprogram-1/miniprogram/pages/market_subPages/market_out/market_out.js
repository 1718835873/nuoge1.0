// miniprogram/pages/market_subPages/market_out/market_out.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-01-01',
    pingzhengImg:[]
  },
  // 添加数据列表
  addData:function(){
    wx:wx.navigateTo({
      url: './supages_market_out/supages_market_out',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 添加图片
  addImg:function(){
    var that = this
    wx.chooseImage({
      count: 0,
      sizeType: [],
      sourceType: [],
      success: function (res) {
        console.log(res)
        console.log(res.tempFiles[0].path)
        var length = res.tempFiles.length;
        for (var i = 0; i < length; i++) {
          that.data.pingzhengImg.push(res.tempFiles[i].path)
        }
        that.setData({
          pingzhengImg: that.data.pingzhengImg
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '图片添加失败!',
        })
      },
      complete: function (res) { },
    })
  },
  // 日期选择
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 获取当前日期函数
  getDate: function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1
    var day = date.getDate()
    if (month > 9) {

    } else {
      month = "0" + month;
    }
    if (day > 9) {

    } else {
      day = "0" + day
    }
    return year + '-' + month + '-' + day
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var date = this.getDate();
    this.setData({
      date: date
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})