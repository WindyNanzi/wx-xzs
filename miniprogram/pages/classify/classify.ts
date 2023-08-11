import { apiGetNavList } from "../../api/api"

// pages/classify/classify.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navActive: 0,
    themeColor: '',
    navs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const app = getApp()
    this.setData({
      themeColor: app.globalData.theme.color
    })

    this.loadNavList()
  },

  loadNavList() {
    apiGetNavList().then((res: any) => {
      this.setData({
        navs: res.data
      })
    })
  },

  onTabChange(item: any) {
    console.log(item.detail)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})