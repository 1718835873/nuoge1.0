// miniprogram/pages/login/login.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 可以输入1  2  3  4  5
    txt:""
  },
  changeTxt:function(e){
    console.log(e)
    var txt=e.detail.value
    this.setData({
      txt:txt
    })
    console.log(this.data.txt)
  },
  // 点击登录按钮
  login:function(){
    var id=this.data.txt
    if(id.length<1){
      wx.showToast({
        title: '请输入用户名',
        icon:'none'
      })
    }else if(id==1){
      // 角色分类登录
      app.globalData.isLogin=1
      console.log("我现在是什么情况")
      wx.switchTab({
      url: '../index/index',
    })
    }else{
      app.globalData.isLogin = 2
      console.log("我现在是什么情况")
      wx.switchTab({
        url: '../index/index',
    })
    }
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