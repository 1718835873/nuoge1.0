// miniprogram/pages/market_subPages/market_out/supages_market_out/supages_market_out.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        id: "1",
        count: 0,
        price: 22.5,
        name: "耳机",
        save: 22
      },
      {
        id: "2",
        count: 0,
        price: 22.5,
        name: "耳机",
        save: 22
      },
      {
        id: "3",
        count: 0,
        price: 22.5,
        name: "耳机",
        save: 22
      },
      {
        id: "4",
        count: 0,
        price: 22.5,
        name: "耳机",
        save: 22
      }
    ],
  },
  // 减法函数
  bindMinus: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var count = this.data.items[index].count
    if (count >= 1) {
      this.data.items[index].count--;
    }
    this.setData({
      items: this.data.items
    })
  },
  // 加法函数
  bindPlus: function (e) {
    console.log(e)

    var index = e.currentTarget.dataset.index;
    var count = this.data.items[index].count;
    if (count < 1000) {
      this.data.items[index].count++
    }
    this.setData({
      items: this.data.items
    })
  },
  // 文本框函数
  bindManual: function () {
    // var num = e.detail.value;
    // // 将数值与状态写回
    // this.setData({
    //   num: num
    // });
  },

  // 点击确定按钮
  ascertain:function(){
    wx.navigateTo({
      url: '../market_out',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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