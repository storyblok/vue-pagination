module.exports = {
  template: require('./pagination.html'),
  props: {
    pagination: {
      type: Object,
      required: true
    },
    callback: {
      type: Function,
      required: true
    }
  },
  computed: {
    array: function () {
      var from = 1
      var to = from + this.pagination.last_page
      var arr = []

      while (from <= to) {
        arr.push(from)
        from++
      }

      if (arr.length <= 1) {
        return []
      }

      return arr
    }
  },
  methods: {
    changePage: function (page) {
      this.callback(page)
    }
  }
}
