
import day from 'dayjs'
import { apiGetNavList, apiGetNewsList } from '../../api/api' 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeColor: '',
    navItems: [],
    news: [],
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
    this.loadNewsList()
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
  onShareAppMessage(opts: any): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  },
  
  loadNavList() {
    apiGetNavList().then(res => {
      const list = res.data
      this.setData({
        navItems: list
      })
    })
  },
  loadNewsList() {
    apiGetNewsList({
      limit: 3,
      hot: true
    }).then(res => {
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

      this.setData({
        news: list
      })
    })
  }
})