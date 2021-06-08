 wx.cloud.init() 
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    books:[] 
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   const db = wx.cloud.database()
    // console.log('fsadfa',db)
   db.collection("books").get({
    success:res=>{
     this.setData({
      books:res.data
     })
     console.log("hhhhhhhhhhhhhhhhhhh")
    },fail:err=>{
     wx.showToast({
      icon:"none",
      title: '查询记录失败',
     })
    }
   })
  },
   goSet:function(){
   wx.navigateTo({
    url: '../set/set',
   })
  
  }, onDel:function(e){
    let id = e.currentTarget.dataset.id
    const db = wx.cloud.database();
    db.collection("books").doc(id).remove({
     success:res=>{
      wx.showToast({
       title: '删除成功',
      })
      this.onLoad()//删除成功重新加载
     },fail:err=>{
      wx.showToast({
       title: '删除失败',
      })
     }
    })
    console.log(id)
  },onUpdate:function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
     url: '../set/set?id='+id,
    })
  }
 })