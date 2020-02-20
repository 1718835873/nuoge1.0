// miniprogram/pages/subPages/gonghuodan/gonghuodan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-01-01',
    goods:[
      {
        id:"LQA_12Agoods1",
        name:"耳机",
        price:34.99,
        num:120
      },
      {
        id: "LQA_12Agoods2",
        name: "耳机",
        price: 34.99,
        num: 120
      },
      {
        id: "LQA_12Agoods3",
        name: "耳机",
        price: 34.99,
        num: 120
      },
      {
        id: "LQA_12Agoods4",
        name: "耳机",
        price: 34.99,
        num: 120
      },

    ],
    superArray:[
      "闲鱼大卖场1号",
      "闲鱼大卖场2号",
      "闲鱼大卖场3号",
      "闲鱼大卖场4号",
      "闲鱼大卖场5号",
      "闲鱼大卖场6号",
      "闲鱼大卖场7号",
      "闲鱼大卖场8号",
      "闲鱼大卖场9号",
      "闲鱼大卖场10号",
      "闲鱼大卖场11号",
      "闲鱼大卖场12号",
      "闲鱼大卖场13号",
      "闲鱼大卖场14号"
    ],
    index:0
  },
// 日期选择
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 卖场选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 确定按钮
  ascertain:function(){
    // 问题：回不到首页
    wx.switchTab({
      url: '../../index/index',
    })
  },
  modify:function(){
    wx.navigateTo({
      url: '../gonghuo/gonghuo',
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
   var date= this.getDate();
   this.setData({
     date:date
   })
  },
  // 获取当前日期函数
  getDate:function(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1
    var day = date.getDate()
    if(month>9){
      
    }else{
      month="0"+month;
    }
    if(day>9){

    }else{
      day="0"+day
    }
    return year+'-'+month+'-'+day
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