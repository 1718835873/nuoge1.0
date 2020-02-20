// components/steppter/steppter.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMinus:function(e){
      var index = e.currentTarget.dataset.index;
      console.log(index)
      var count = this.data.items[index].count
      if (count >= 1) {
        this.data.items[index].count--;
      }
      this.setData({
        items: this.data.items
      })
    },
    bindPlus:function(e){
      var index = e.currentTarget.dataset.index;
      var count = this.data.items[index].count;
      if (count < 1000) {
        this.data.items[index].count++
      }
      this.setData({
        items: this.data.items
      })
    }
  }
})
