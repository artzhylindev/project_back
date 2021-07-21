<template>
  <div>
    <h1 class="title">
      all note
    </h1>

    <div class="wrapper_forms">
      <form @submit.prevent="addPost" class="post_form" >
        <div class="form-group">
          <label for="title">title</label>
          <input id="title" v-model="post.title">
        </div>
        <div class="form-group">
          <label for="description">description</label>
          <textarea id="description" v-model="post.description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary"> submit data</button>
      </form>
    </div>

    <div v-if="errored" class="alert alert-danger">
      the table has not loaded
    </div>


    <div v-else class="wrap_table_post">
      <div v-if="loading"> loading ...</div>

      <div class="table_head">
        <div class="mcol col_id">#</div>
        <div class="mcol col_title">title</div>
        <div class="mcol col_description">description</div>
        <div class="mcol col_btn"></div>
      </div>


      <div class="table_body">

        <div v-for="post in posts" :key="post.id" class="table_row">
          <div class="mrow col_id">{{ post.id }}</div>
          <div class="mrow col_title">{{ post.title}}</div>
          <div class="mrow col_description">{{ post.description }}</div>
          <div class="mrow col_btn">
            <button class="btn btn-success"><img src="/img/pen-solid.svg"></button>
            <button class="btn btn-danger"> <img src="/img/trash-solid.svg"></button>
          </div>
        </div>

      </div>
    </div>


    <nav aria-label="...">
      <ul class="pagination">
        <li :class="{disabled: !pagination.prev_page_url}"
            @click.prevent="getPosts(pagination.prev_page_url)"
            class="page-item">
          <a href="#" class="page-link">Prev</a>
        </li>

        <li v-for="page in pagination.last_page"
            class="page-item">
          <a class="page-link" href="#"> {{ page }} </a>
        </li>

        <li :class="{disabled: !pagination.next_page_url}"
            @click.prevent="getPosts(pagination.next_page_url)"
            class="page-item">
          <a href="#" class="page-link" >Next</a>
        </li>
      </ul>
    </nav>

  </div>

</template>

<script>

export default {

  data() {
    return {
      posts: [],
      post: {
        id: "",
        title: "",
        description: ""
      },
      post_id: "",
      pagination: {},
      edit: false,
      loading: true,
      errored: false
    };
  },



  methods: {

    makePagination(response) {
      let pagination = {
        current_page: response.current_page,
        last_page: response.last_page,
        prev_page_url: response.prev_page_url,
        next_page_url: response.next_page_url
      }
      this.pagination = pagination
      console.log(response)
    },

    getPosts(page_url) {
      page_url = page_url || "/api/posts"

      axios
          .get(page_url)

          .then(response => {
            this.posts = response.data.data
            this.makePagination(response.data)
          })
          .catch(error => {
            console.log(error)
            this.errored = true;
          })
          .finally(() => this.loading = false)
    },



    addPost() {
      if (this.edit === false) {
         axios
            .post("/api/posts",{
              title: this.post.title,
              description: this.post.description
            })
            .then(response => {
              this.post.title = ""
              this.post.description = ""
              this.getPosts()

              console.log(response)
            })
            .catch(error => console.log(error))
      } else {

      }

    },
  },

  mounted() {
    this.getPosts()
  },

}
</script>