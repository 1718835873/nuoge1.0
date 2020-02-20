// miniprogram/pages/market_subPages/takeOver/takeOver.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-01-01',
    foods:[
      {
        name:"耳机1",
        id:"LAQ_12A1",
        price:34.99,
        num:120
      },
      {
        name: "耳机2",
        id: "LAQ_12A2",
        price: 34.99,
        num: 120
      },
      {
        name: "耳机3",
        id: "LAQ_12A3",
        price: 34.99,
        num: 120
      },
      {
        name: "耳机4",
        id: "LAQ_12A4",
        price: 34.99,
        num: 120
      },
      {
        name: "耳机5",
        id: "LAQ_125",
        price: 34.99,
        num: 120
      },
      {
        name: "耳机6",
        id: "LAQ_126",
        price: 34.99,
        num: 120
      },
      {
        name: "耳机7",
        id: "LAQ_12A7",
        price: 34.99,
        num: 120
      }
    ]
  },
  // 日期选择
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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