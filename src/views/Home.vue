<template>
  <div class="home" v-loading="loading">
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide slide-one">
        <div class="page">
          <el-dropdown @command="handleCommand">
          <el-button type="primary">
            登录<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="host">我是业主</el-dropdown-item>
            <el-dropdown-item command="isv">我是服务商</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
          <el-button class="page-right" @click="goRegister">立即注册</el-button>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">
        <div class="page">
            <el-button type="primary">我是服务商</el-button>
            <el-button class="page-right" type="primary">我是业主</el-button>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <div class="page">
            <el-button type="primary">登录</el-button>
            <el-button class="page-right">立即注册</el-button>
        </div>
      </swiper-slide>
    </swiper>
    <el-dialog
      :title="title"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <el-form label-position="left" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm(formLabelAlign)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      loading: true,
      item:'',
      title:'登录',
      caseList: [],
      newsList: [],
      formLabelAlign: {
        name: "",
        password: ""
      },
      centerDialogVisible: false,
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          // slideChange: () => {
          //   let swiper = this.$refs.mySwiper.swiper;
          //   //console.log(swiper.activeIndex); //滑动打印当前索引
          //   if (swiper.activeIndex === this.list.length - 1) {
          //     //到最后一个加载更多数据
          //     let newList = [];
          //     let listLength = this.list.length;
          //     for (let i = 0; i < 10; i++) {
          //       newList.push(listLength + i);
          //     }
          //     this.list = this.list.concat(newList);
          //   }
          // }
        }
      }
    };
  },
  created() {},
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    handleCommand(item){
      this.item = item
      if(item == 'host'){
        this.title = '业主登录'
      }else if(item == 'isv'){
        this.title = '服务商登录'
      }else{
        this.title = '登录'
      }
      this.centerDialogVisible = true
    },
    submitForm(form) {
      if(this.item == 'host'){
        this.$router.push({ name: "hostAdmin" });
      }else{
        this.$router.push({ name: "isvAdmin" });
      }
      // this.$refs.lform.validate(valid => {
      //   if (valid) {
      //     this.axios
      //       .get(
      //         `User/Login?strUser=${this.loginform.name}&strPwd=${this.loginform.pass}`
      //       )
      //       .then(response => {
      //         window.console.log(response);
      //         if (response.data.bRes) {
      //           this.$message({
      //             message: "登录成功了呢",
      //             type: "success"
      //           });
      //           sessionStorage.setItem("token", response.data.Ticket);
      //           this.$router.push({ name: "admin" });
      //         } else {
      //           this.$message({
      //             message: "账号或密码错误",
      //             type: "error"
      //           });
      //         }
      //       })
      //       .catch(e => {
      //         this.$message({
      //           message: "网络或程序异常！" + e,
      //           type: "error"
      //         });
      //       });
      //   } else {
      //     this.$message({
      //       message: "请输入合法的值",
      //       type: "error"
      //     });
      //     return false;
      //   }
      // });
    },
    goRegister() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.$http
      .all([
        this.$http.get("Cases/GetCasesAll"),
        this.$http.get(`News?type=1&num=3`)
      ])
      .then(
        this.$http.spread((responseCases, responseNews) => {
          this.caseList = responseCases.data;
          this.newsList = responseNews.data;
          this.loading = false;
        })
      );
  }
};
</script>

<style lang="scss" scoped>
/* .el-header {
  position: absolute;
} */
.swiper-slide {
  font-size: 24px;
  // text-align: center;
  // line-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .page {
    display: flex;
    justify-content: center;
    // text-align: center;
    // height: 100px;
    // overflow: hidden;
    h3,
    p {
      font-size: 30px;
      font-weight: 400;
      color: #fff;
    }
    .page-right {
      margin-left: 40px;
    }
  }

  .slogan {
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding: 30px 0;
  }
}
//经典案例
.case-item {
  width: 1100px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    width: 330px;
    height: 250px;
    list-style: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    margin: 5px;
    position: relative;
    overflow: hidden;

    &:hover {
      .case-item-hover {
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
//经典案例hover
.case-item-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  background-color: rgba(225, 56, 52, 0.7);

  .hover-title {
    height: 50px;
    color: #fff;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-top: 20px;
  }
  .bottom {
    border-bottom: 1px solid #fff;
    width: 60px;
    margin: 0 auto;
  }
  .more {
    width: 90px;
    padding: 5px 5px;
    margin: 0 auto;
    margin-top: 100px;
    border: 2px solid #fff;
    span {
      color: #fff;
      font-size: 20px;
    }
  }
}
// .swiper-slide:nth-child(2n) {
//   background: skyblue;
// }
// .swiper-slide:nth-child(2n-1) {
//   background: seashell;
// }
.slide-one {
  background: url(../assets/img/home_top.jpg) no-repeat center;
  background-size: cover;
}
.slide-two {
  background: url(../assets/img/home_do.jpg) no-repeat center;
  background-size: cover;
}
.slide-three {
  background: url(../assets/img/home_anli.jpg) no-repeat center;
  background-size: cover;
}
//最新资讯
.news-content {
  width: 1240px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  &-item {
    width: 400px;
    display: flex;
    flex-direction: column;

    .item-img {
      width: 360px;
      height: 230px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-origin: content-box;
      margin: 0 auto;
    }
    .el-divider {
      background-color: #fff;
      height: 3px;
      .el-divider__text {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 0px;
        color: #fff;
      }
    }
    .item-content {
      width: 360px;
      height: 230px;
      margin: 0 auto;
      //border: 1px solid paleturquoise;
      h3 {
        font-size: 22px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        font-size: 15px;
        height: 80px;
        overflow: hidden;
        margin: 10px 0;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal !important;
        word-wrap: break-word;
      }
      span {
        display: block;
        font-size: 14px;
        text-align: end;
      }
      h3,
      p,
      span {
        color: #fff;
      }
    }
  }
}
.order {
  order: -1;
}
.order-img {
  order: 1;
}
</style>
