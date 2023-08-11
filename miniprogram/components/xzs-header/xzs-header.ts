// components/xzs-header/xzs-header.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    themeColor: ''
  },

  lifetimes: {
    attached: function() {
      const app = getApp()
      this.setData({
        themeColor: app.globalData.theme.color
      })
    }
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})
