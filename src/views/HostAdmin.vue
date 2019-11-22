<template>
  <div class="admin">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" style="height:100ch" class="el-menu-vertical-demo" router>
          <el-menu-item index="/hostAdmin/user">
            <i class="el-icon-user"></i>
            <span slot="title">账号管理</span>
          </el-menu-item>
          <el-menu-item index="/hostAdmin/isv">
            <i class="el-icon-s-custom"></i>
            <span slot="title">我的服务商</span>
          </el-menu-item>
          <el-menu-item index="/hostAdmin/parking">
            <i class="el-icon-truck"></i>
            <span slot="title">我的停车场</span>
          </el-menu-item>
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>我的停车场</span>
            </template>
            <el-menu-item-group>
              <template slot="title">停车场管理</template>
              <el-menu-item index="/hostAdmin/info">基础信息</el-menu-item>
              <el-menu-item index="/hostAdmin/service">岗亭信息</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="我的停车场">
              <el-menu-item index="/hostAdmin/auth">停车场授权</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="base-padding">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "admin"
};
</script>

<style lang="scss" soped>
.admin {
  border-top: 1px solid rgb(238, 238, 238);
}

.base-padding {
  padding: 20px;
}

.el-footer {
  line-height: 60px;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>