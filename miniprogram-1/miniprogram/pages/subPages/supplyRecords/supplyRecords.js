// miniprogram/pages/subPages/supplyRecords/supplyRecords.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsImg:[],
    goods:[
      {
        id:"goods01",
        price:22.99,
        name:'耳机',
        num:100,
        imgSrc:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=2&spn=0&di=10890&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1577757330%2C3166662766&os=1600237258%2C711900055&simid=0%2C0&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fbd315c6034a85edf5b80742e41540923dd5475ab.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzit1w5_z%26e3Bkwt17_z%26e3Bv54AzdH3Fq7jfpt5gAzdH3F888n00bmnba089ab80l_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods02",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=4&spn=0&di=19030&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=66673428%2C1573083645&os=3754407348%2C1815658912&simid=3330725982%2C125370159&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fe850352ac65c1038c90f44cfba119313b07e894e.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Foo_z%26e3Bfi7uw1wfit_z%26e3Bv54AzdH3Fetjok-nmc8cd9bmcb900-nmc8cd9bmcb900b9ld_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods03",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=26&spn=0&di=2860&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3921256920%2C1407108337&os=52379479%2C2965306184&simid=3523327310%2C519773704&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage6.guang.j.cn%2Fimages%2F1208%2Fmid2%2F520382138216_44581448.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_fiwg2ytAzdH3F8c8mAzdH3F8daAzdH3Frgn&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods04",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=47&spn=0&di=12650&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1784836670%2C2389302124&os=2815882%2C2536113052&simid=4235008628%2C865571630&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage7.guang.j.cn%2Fimages%2F1208%2Fmid2%2F43269522956_40117672.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_fiwg2ytAzdH3Fd88aAzdH3Fdbl%3Fs5vwpt5g%3Do561I1_z2C%24qd88a&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods05",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=49&spn=0&di=4180&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1675989157%2C1046255694&os=2927610578%2C2680311420&simid=3533843893%2C374054316&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.lshou.com%2Fpic%2Fimg%2Falicdn%2Fserver%2Fimgextra%2Fi1%2F66035150%2FTB2MT9cgN6I8KJjy0FgXXXXzVXa_!!66035150.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fr6517vp_z%26e3Bsfi57_z%26e3Bv54AzdH3FvbdllAzdH3Fpcm8kbwcbmjlv_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods06",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=51&spn=0&di=23760&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3495203303%2C166919813&os=178811936%2C2637488948&simid=3390595848%2C397752152&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimage3.guang.j.cn%2Fimages%2F1208%2Fmid2%2F42596435768_39641816.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B3_z%26e3BvgAzdH3FvwpjAzdH3F3_fiwg2ytAzdH3FdlbAzdH3F9alAzdH3Frgc%3F1r1jk72%3Da&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
      {
        id: "goods07",
        price: 22.99,
        name: '耳机',
        num: 100,
        imgSrc: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%87%91%E5%A4%A7%E7%8F%AD%E8%A1%A3%E6%9C%8D%E5%93%81%E7%89%8C%E6%A8%A1%E7%89%B9&step_word=&hs=2&pn=57&spn=0&di=6610&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3534914236%2C2182432529&os=1250873833%2C1028808095&simid=0%2C0&adpicid=0&lpn=0&ln=223&fr=&fmq=1579684442776_R&fm=result&ic=0&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=15&oriquery=&objurl=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180709%2F478b7b9f09914940982d69c88ac11e4a.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bf5i7_z%26e3Bv54AzdH3FwAzdH3Fd9aan8nnb_8aa8m0mdc&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
      },
    ],
    select:false,
    state:"供货中"
  },
  // 添加图片
  addImg:function(){
    var that=this
    wx.chooseImage({
      count: 0,
      sizeType: [],
      sourceType: [],
      success: function(res) {
        console.log(res)
        console.log(res.tempFiles[0].path)
        var length = res.tempFiles.length;
        for(var i=0;i<length;i++)
        {
          that.data.goodsImg.push(res.tempFiles[i].path)
        }
        that.setData({
          goodsImg:that.data.goodsImg
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '图片添加失败!',
        })
      },
      complete: function(res) {},
    })
  },
  bindSelect() {
    this.setData({
      select: !this.data.select
    })
  },
  // 选择
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      state: name,
      select: false
    })
  },
  // 确定按钮
  ascertain:function(){
    wx.switchTab({
      url: '../../index/index',
    })
  },
  // 修改
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
    var length=this.data.goods.length;
    for(var i=0;i<length;i++)
    {
      this.data.goodsImg.push(this.data.goods[i].imgSrc)
    }
    this.setData({
      goodsImg:this.data.goodsImg
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