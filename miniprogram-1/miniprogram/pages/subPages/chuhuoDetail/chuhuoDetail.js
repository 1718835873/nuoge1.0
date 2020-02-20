// miniprogram/pages/subPages/chuhuoDetail/chuhuoDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsImg: [],
    goods: [
      {
        id: "goods01",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=32&spn=0&di=2200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3006241295%2C2271580234&os=4168867232%2C2369241568&simid=4189723706%2C594862959&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage2.guang.j.cn%2Fimages%2F1208%2Fmid2%2F45023024477_51338632.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojkd_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_q7gztAzdH3F90AzdH3F%3Fs5vwpt5g%3Dr6tvj_wss&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods02",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=32&spn=0&di=2200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3006241295%2C2271580234&os=4168867232%2C2369241568&simid=4189723706%2C594862959&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage2.guang.j.cn%2Fimages%2F1208%2Fmid2%2F45023024477_51338632.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojkd_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_q7gztAzdH3F90AzdH3F%3Fs5vwpt5g%3Dr6tvj_wss&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods03",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=32&spn=0&di=2200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3006241295%2C2271580234&os=4168867232%2C2369241568&simid=4189723706%2C594862959&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage2.guang.j.cn%2Fimages%2F1208%2Fmid2%2F45023024477_51338632.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojkd_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_q7gztAzdH3F90AzdH3F%3Fs5vwpt5g%3Dr6tvj_wss&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods04",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=32&spn=0&di=2200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3006241295%2C2271580234&os=4168867232%2C2369241568&simid=4189723706%2C594862959&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage2.guang.j.cn%2Fimages%2F1208%2Fmid2%2F45023024477_51338632.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojkd_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_q7gztAzdH3F90AzdH3F%3Fs5vwpt5g%3Dr6tvj_wss&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods05",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=32&spn=0&di=2200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3006241295%2C2271580234&os=4168867232%2C2369241568&simid=4189723706%2C594862959&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage2.guang.j.cn%2Fimages%2F1208%2Fmid2%2F45023024477_51338632.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojkd_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_q7gztAzdH3F90AzdH3F%3Fs5vwpt5g%3Dr6tvj_wss&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods06",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=32&spn=0&di=2200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3006241295%2C2271580234&os=4168867232%2C2369241568&simid=4189723706%2C594862959&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage2.guang.j.cn%2Fimages%2F1208%2Fmid2%2F45023024477_51338632.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojkd_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_q7gztAzdH3F90AzdH3F%3Fs5vwpt5g%3Dr6tvj_wss&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods07",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=32&spn=0&di=2200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3006241295%2C2271580234&os=4168867232%2C2369241568&simid=4189723706%2C594862959&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage2.guang.j.cn%2Fimages%2F1208%2Fmid2%2F45023024477_51338632.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojkd_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_q7gztAzdH3F90AzdH3F%3Fs5vwpt5g%3Dr6tvj_wss&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
    ],
    proofUrl:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
// 上传
  upload:function(){
    var that=this
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        var length=res.tempFiles.length;
        for(var i=0;i<length;i++)
        {
          that.data.proofUrl.push(res.tempFiles[i].path)
        }
        that.setData({
          proofUrl:that.data.proofUrl
        })
        console.log(that.data.proofUrl)
      },
    })  
  },
  /**
   * 
   * 
   * 
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var length = this.data.goods.length;
    for (var i = 0; i < length; i++) {
      this.data.goodsImg.push(this.data.goods[i].imgSrc)
    }
    this.setData({
      goodsImg: this.data.goodsImg
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