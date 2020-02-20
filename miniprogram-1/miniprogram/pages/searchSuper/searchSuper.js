// miniprogram/pages/searchSuper/searchSuper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that=this
    that.setData({
      id:options.id,
      chooseSuper:""
    })
  },
  // 首先判断是否选择卖场了
  radioChange:function(e){
    console.log(e)
    this.setData({
      chooseSuper:e.detail.value
    })
  },
  // 单击确定按钮
  yesClick:function(){
    console.log(this.data.chooseSuper)
    var supername = this.data.chooseSuper
    console.log(this.data.id)
    var url=""
    if (this.data.chooseSuper.length !==0){
      if (this.data.id == 1) {
        url = "../subPages/gonghuo/gonghuo?param=" + supername
      } else if (this.data.id == 2) {
        url = "../subPages/supply/supply?param=" + supername
      } else if (this.data.id == 3) {
        url = "../subPages/chuhuo/chuhuo?param=" + supername
      }
    }else{
      wx.showToast({
        title: '未选择任何卖场',
        mask:true,
        image:"../../images/tupianjiazaishibai02.png"
      })
      return false;
    }
   
    wx.navigateTo({
      url: url
    })

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