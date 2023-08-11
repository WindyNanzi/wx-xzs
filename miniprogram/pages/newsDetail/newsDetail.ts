import day from 'dayjs'
import { apiGetNewsDetail } from "../../api/api"


// pages/newsDetail/newsDetail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option: any) {
    const id = option.id
    this.getDetail(id)
  },

  getDetail(id: string) {
    apiGetNewsDetail({id}).then(res => {
      const data =  res.data
      const time = day(data.publish_date).format('YYYY-MM-DD HH:mm')
      const content = data.content
        .replace(/<p/gi, '<p class="pstyle"')
        .replace(/<img/gi, '<img class="imgstyle"')
      
      wx.setNavigationBarTitle({ title: data.title })
      
      this.setData({
        detail: {
          ...data,
          time,
          content
        },
      })

    })
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
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const url = `/${currentPage.route}?id=${ this.data.detail._id }`;

    return {
      title: this.data.detail.title,
      path: url
    }
  },

  onShareTimeline() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const url = `/${currentPage.route}?id=${ this.data.detail._id }`;

    return {
      title: this.data.detail.title,
      path: url
    }
  }
})