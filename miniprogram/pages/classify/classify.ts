import { apiGetNavList, apiGetProductList } from "../../api/api"

// pages/classify/classify.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navActive: 0,
    themeColor: '',
    navs: [],
    products: [],
    size: 0,
    noMore: false,
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const app = getApp()
    this.setData({
      themeColor: app.globalData.theme.color
    })

    this.loadNavList().then(() => {
      this.loadProductList()
    })
  },

  loadNavList() {
    return apiGetNavList().then((res: any) => {
      this.setData({
        navs: res.data
      })
    })
  },

  loadProductList() {
    const navid = (this.data.navs.find((_: any, index: number) => index === this.data.navActive) as any)?._id

    if(this.data.noMore) {
      return
    }
    
    this.setData({ loading: true })
    apiGetProductList({
      navid,
      limit: 6,
      size: this.data.size,
    }).then((res: any) => {
      const list = res.data
      const newList = [...this.data.products, ...list] as never[]
      const size = this.data.size + newList.length
      const noMore = list.length < 6
      this.setData({
        products: newList,
        size,
        noMore
      })
    }).finally(() => {
      this.setData({ loading: false })
    })
  },
  clearProductStatus() {
    this.setData({
      products: [],
      size: 0,
      noMore: false,
    })
  },
  onTabChange(item: any) {
    this.clearProductStatus()
    this.setData({
      navActive: item.detail.index
    })
    this.loadProductList()
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
    this.loadProductList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})