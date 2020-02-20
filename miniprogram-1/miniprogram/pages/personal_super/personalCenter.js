// pages/personalCenter/personalCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telphoneNum:"",//真正存放手机号码的变量
    flag: true, //true 是隐藏  false  显示
    flag1:true,
    txtValue:"",
    addressValue:""
  },
  // 修改
  modify:function(){
    this.data.flag=false;
    this.setData({
      flag:this.data.flag
    })
  },
  
  // 取消
  cancel: function () {
    this.setData({
      flag:true
    })
  },
  // 文本框
  txt:function(e){
    var num=e.detail.value
    this.setData({
      txtValue:num
    })
  },
  // 确定
  ascertain:function(e){
    var that=this
    console.log(e)
    var testNum=this.data.txtValue
    console.log(testNum) 
    var res = that.checkPhone(testNum)
    if (!res){
      that.setData({
        flag:true
      })
      wx.showToast({
        title: "输入错误",
        icon:"none"
      })
    }else{
      that.setData({
        flag: true,
        telphoneNum:testNum                                                                                                         
      })
      wx.showToast({
        title: "修改成功",
      })
    }
  },
  // 检查手机号码
  checkPhone:function(num){
    var reg=/^1[345678]\d{9}$/;
    if(reg.test(num)){
      return true
    }else{
      return false
    }
    // image: '../../images/tupianjiazaishibai02.png',
  },

  // 修改地址
  modifyAddress: function () {
    this.data.flag1 = false;
    this.setData({
      flag1: this.data.flag1
    })
  },
  txt_address: function (e) {
    var num = e.detail.value
    this.setData({
      addressValue: num
    })
  },
  // 取消
  cancel_address: function () {
    this.setData({
      flag1: true
    })
  },
  // 确定
  ascertain_address: function (e) {
    var that = this
    console.log(e)
    var testNum = this.data.addressValue
    console.log(testNum)
      that.setData({
        flag1: true,
        addressValue: testNum
      })
      wx.showToast({
        title: "修改成功",
      })
  },
  // 收货列表
  check_take_over:function(){

  },
  check_out:function(){

  },
  // 出货列表
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