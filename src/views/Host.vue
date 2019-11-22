<template>
  <div class="news">
    <banner title="业主管理平台" />
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  name: "news",
  components: {
    Banner
  },
  data() {
    return {
      loading: true,
      newsList: [],
      newstype: 1
    };
  },
  methods: {

  },
  mounted() {
    
  },
  watch: {

  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.news {
  .page {
    display:flex;
    justify-content: center;
    .page-right{
      margin-left:40px;
    }
  }
}
</style>