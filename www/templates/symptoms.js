new Vue(
  {
    vuetify: new Vuetify(),
    el: '#app',
    data: {
      symptoms: {{symptoms_json}},
      symptoms_info: {},
      page_size: 4 /* hard coded for now*/,
      cur_page_start: 0
    },
    computed:
    {
      cur_page_symptoms: function() {
        console.log("getting symptoms");
        return this.symptoms.slice(this.cur_page_start, this.cur_page_start + this.page_size);
      }
    },
    methods: {
      next_page: function () {
        if (this.have_next())
          this.cur_page_start += this.page_size;
      },
      prev_page: function () {
        if (this.have_prev())
          this.cur_page_start -= this.page_size;
      },
      have_next: function() {
        return this.cur_page_start + this.page_size < this.symptoms.length;
      },
      have_prev: function() {
        return this.cur_page_start >= this.page_size;
      }
    }
  }
);
