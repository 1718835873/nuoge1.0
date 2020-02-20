//index.js
const app = getApp()

Page({
  data: {
    isLogin:"",
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
// 跳转到供货页面
  goGonghuo:function(){
    wx.navigateTo({
      url: '../searchSuper/searchSuper?id=1',
    })
  },
  // 跳转到供货单页面
  goSupply:function(){
    wx.navigateTo({
      url: '../searchSuper/searchSuper?id=2',
    })
  },

// 跳转到出货单页面
  goOut:function(){
    wx.navigateTo({
      url: '../searchSuper/searchSuper?id=3',
    })
  },

  // 跳转到卖场  库存页面
  goStock:function(){
    wx.navigateTo({
      url: '../market_subPages/stock/stock',
    })
  },
  // 跳转到卖场  出货页面
  go_market_out: function () {
    wx.navigateTo({
      url: '../market_subPages/market_out/market_out',
    })
  },
  // 跳转到卖场  收货页面
  gotake_over: function () {
    wx.navigateTo({
      url: '../market_subPages/takeOver/takeOver',
    })
  },


  onLoad: function(e) {
// 获取角色状态
    var id=app.globalData.isLogin
    console.log(id)
    this.setData({
      isLogin:id
    })
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
// 
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })

    // 获取角色
   

  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
