# vue-pagination
Vue pagination component for use with Uikit.

* [Vue.js](http://vuejs.org/) (tested with 1.0.26).
* [UIkit](http://getuikit.com/)

Required attributes
* total: this.numFound,
* per_page: this.pageSize,
* current_page: this.page,
* last_page: Math.ceil((this.numFound / this.pageSize)) - 1

### Example
```js
new Vue({
  el: '#app',
  data: function () {
    return {
      search: '',
      page: 1,
      numFound: 0,
      pageSize: 0
    }
  },
  computed: {
    pagination: function() {
      return {
        total: this.numFound,
        per_page: this.pageSize,
        current_page: this.page,
        last_page: Math.ceil((this.numFound / this.pageSize)) - 1
      }
    }
  },
  methods: {
    loadData: function (page) {
      console.log(page)
    }
  },
  components: {
    pagination: require('pagination')
  }
})
```

```html
<body id="app">
  <pagination :pagination="pagination" :callback="loadData"></pagination>
</body>
```

#### Options
| Name          | Type     | Default | Required | Description
| :------------ | :--------| :-------| :--------| :-----------
| pagination    | Object   |         | true     | Pagination object used to create pagination
| callback      | Function |         | true     | Callback function used to load data for selected page
