// pages/generate/generate.js
import QRCode from './weapp-qrcode.js'
Page({
 
  generate: function (e) {
    let content
    // 获取输入的 content 内容
    content = e.detail.value.content
    // console.log(key)

    function getCaption(obj,state) {
      var index=obj.lastIndexOf(" ");
      if(state==0){
      obj=obj.substring(0,index);
      }else {
      obj=obj.substring(index+1,obj.length);
      }
      return obj;
      }
//分割输入信息
var qian = content
var hou = content

//截取符号前面部分
qian=getCaption(content,0) //输出aaa
//截取符号后面部分
hou=getCaption(content,1)      


    function mi( x,  y, mod) {  
      var res = 1;  
      while(y)  
      {  
          if(y & 1) {
              res =  (res * x) % mod; 
          }
          x = (x * x) % mod;  
          y = y / 2;  
      }  
      return res;  
  }  
// 加密函数       //签名用  5,773,2021    加密用 3 1595 2491    e d n
 content=mi(qian,3,2491)+" "+mi(mi(qian,3,2491),5,2021)
 

 qian = Number(qian);

if (hou==12138) {
    if (content) {
      // 生成二维码 这里的QRCode方法下面有讲解
      var qrcode = new QRCode('canvas1', {
        text: content,
        width: 100,
        height: 100,
        padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
        correctLevel: QRCode.CorrectLevel.H, // 二维码可辨识度
        callback: (res) => {
          // console.log(res.path)
          // 接下来就可以直接调用微信小程序的api保存到本地 将图片地址保存到 postUrl
          this.setData({
            postUrl1: res.path
          })
        }
      })
      content=mi(qian+1,3,2491)+" "+mi(mi(qian+1,3,2491),5,2021)
      var qrcode = new QRCode('canvas2', {
        text: content,
        width: 100,
        height: 100,
        padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
        correctLevel: QRCode.CorrectLevel.H, // 二维码可辨识度
        callback: (res) => {
          // console.log(res.path)
          // 接下来就可以直接调用微信小程序的api保存到本地 将图片地址保存到 postUrl
          this.setData({
            postUrl2: res.path
          })
        }
      })
      content=mi(qian+2,3,2491)+" "+mi(mi(qian+2,3,2491),5,2021)
      var qrcode = new QRCode('canvas3', {
        text: content,
        width: 100,
        height: 100,
        padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
        correctLevel: QRCode.CorrectLevel.H, // 二维码可辨识度
        callback: (res) => {
          // console.log(res.path)
          // 接下来就可以直接调用微信小程序的api保存到本地 将图片地址保存到 postUrl
          this.setData({
            postUrl3: res.path
          })
        }
      })
      content=mi(qian+3,3,2491)+" "+mi(mi(qian+3,3,2491),5,2021)
      var qrcode = new QRCode('canvas4', {
        text: content,
        width: 100,
        height: 100,
        padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
        correctLevel: QRCode.CorrectLevel.H, // 二维码可辨识度
        callback: (res) => {
          // console.log(res.path)
          // 接下来就可以直接调用微信小程序的api保存到本地 将图片地址保存到 postUrl
          this.setData({
            postUrl4: res.path
          })
        }
      })
      content=mi(qian+4,3,2491)+" "+mi(mi(qian+4,3,2491),5,2021)
      var qrcode = new QRCode('canvas5', {
        text: content,
        width: 100,
        height: 100,
        padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
        correctLevel: QRCode.CorrectLevel.H, // 二维码可辨识度
        callback: (res) => {
          // console.log(res.path)
          // 接下来就可以直接调用微信小程序的api保存到本地 将图片地址保存到 postUrl
          this.setData({
            postUrl5: res.path
          })
        }
      })
      
    // console.log(qrcode)
    } else {
      // 如果用户输入的 content 为空，弹出警告
      wx.showToast({
        title: 'content不能为空',
        duration: 2000
      })
    }} else {
      // 如果用户输入的 content 为空，弹出警告
      wx.showToast({
        title: '厂商码错误',
        duration: 2000
      })
    }
  }

  
,

  // 保存二维码功能
  savePic1: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.postUrl1,
     
      // success: function (data) {
      //   wx.showToast({
      //     title: '图片保存成功',
      //     icon: 'success',
      //     duration: 2000
      //   })
      // }
    })
  
  } ,
  savePic2: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.postUrl2,
     
      // success: function (data) {
      //   wx.showToast({
      //     title: '图片保存成功',
      //     icon: 'success',
      //     duration: 2000
      //   })
      // }
    })
  
  } ,
  savePic3: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.postUrl3,
     
      // success: function (data) {
      //   wx.showToast({
      //     title: '图片保存成功',
      //     icon: 'success',
      //     duration: 2000
      //   })
      // }
    })
  
  } ,
  savePic4: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.postUrl4,
     
      // success: function (data) {
      //   wx.showToast({
      //     title: '图片保存成功',
      //     icon: 'success',
      //     duration: 2000
      //   })
      // }
    })
  
  } ,
  savePic5: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.postUrl5,
     
      // success: function (data) {
      //   wx.showToast({
      //     title: '图片保存成功',
      //     icon: 'success',
      //     duration: 2000
      //   })
      // }
    })
  
  } ,
    
  
 
  
  
  /**
   * 页面的初始数据
   */
  data: {

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