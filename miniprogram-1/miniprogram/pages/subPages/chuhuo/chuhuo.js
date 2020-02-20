// miniprogram/pages/subPages/chuhuo/chuhuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: [
      { date: "2019-09-12", moneyDate: true, imgUrl:"../../../images/hongbao-two.png"},
      { date: "2019-04-21", moneyDate: true, imgUrl: "../../../images/hongbao-two.png" },
      { date: "2019-01-11", moneyDate: false, imgUrl: "../../../images/hongbao-two.png"},
      { date: "2019-02-19", moneyDate: false, imgUrl: "../../../images/hongbao-two.png"}
    ]
  },
  // 点击查看
  look: function () {
    wx.navigateTo({
      url: '../chuhuoDetail/chuhuoDetail',
    })
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