// miniprogram/pages/personal_super/outList/outListDetail/outListDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foods: [
      { name: "耳机", id: "LTA-12A1", saleout: 2 },
      { name: "耳机", id: "LTA-12A2", saleout: 2 },
      { name: "耳机", id: "LTA-12A3", saleout: 2 },
      { name: "耳机", id: "LTA-12A4", saleout: 2 },
      { name: "耳机", id: "LTA-12A5", saleout: 2 },
      { name: "耳机", id: "LTA-12A6", saleout: 2 }
    ]
  },
  // 修改
  modify:function(){
   wx.redirectTo({
     url: '../../../subPages/gonghuo/gonghuo',
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