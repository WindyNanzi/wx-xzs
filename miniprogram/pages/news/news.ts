import day from 'dayjs'
import { apiGetNewsList } from "../../api/api"

// pages/news/news.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size: 0,
    news: [],
    loadAll: false,
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.loadList()
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
    this.setData({
      loading: true,
      news: [],
      size: 0,
      loadAll: false,
    })

    this.loadList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.setData({
      size: this.data.size + 8
    })

    this.loadList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  loadList() {
    if(this.data.loadAll) {
      return
    }


    this.setData({ loading: true })
    

    apiGetNewsList({
      limit: 8,
      size: this.data.size,
    }).then((res: any) => {
      const list = res.data.map((item:any) => {
        const { author, picurl, publish_date, view_count, title, _id } = item
        const time = day(publish_date).format('MM-DD')
        return {
          author,
          img: picurl,
          title,
          viewCount: view_count,
          time,
          _id
        }
      })

      if(list.length < 8) {
        this.setData({
          loadAll: true
        })
      }

      const allList = [...this.data.news, ...list] as any
      this.setData({
        news: allList
      })
    }).finally(() => {
      this.setData({ loading: false })
      wx.stopPullDownRefresh()
    })
  }
})