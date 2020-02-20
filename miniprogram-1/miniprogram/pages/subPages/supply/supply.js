// miniprogram/pages/subPages/supply/supply.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates:["2019-09-12","2019-04-21","2019-01-11","2019-02-19"]
  },
// 删除
  del(e) {
    wx.showModal({
      title: '提示',
      content: '确认要删除此供货单记录吗？',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定')
          // 按照索引下标删除条目
          this.data.dates.splice(e.currentTarget.dataset.index, 1)
          this.setData({
            dates: this.data.dates
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 点击查看
  look:function(){
    wx.navigateTo({
      url: '../supplyRecords/supplyRecords',
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