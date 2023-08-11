// components/xzs-news-item/xzs-news-item.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /** id */
    id: { type: String, default: '' },
    /** 发布者 */
    author: { type: String, default: '' },
    /** 图片地址 */
    img: { type: String, default: '' },
    /** 标题 */
    title: { type: String, default: '' },
    /** 上传时间 */
    time: { type: String, default: '' },
    /** 观看次数 */
    viewCount: { type: Number, default: 0  }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoDetail() {
      wx.navigateTo({
        url: `/pages/newsDetail/newsDetail?id=${this.id}`
      })
    }
  }
})
