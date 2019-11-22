<template>
  <div class="user">
    <div class="top"><el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true">新增</el-button></div>
    <div class="main">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="isvId" label="isvPid" width="180"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
          <el-table-column prop="phone" label="手机号" width="180"> </el-table-column>
          <el-table-column prop="bank" label="开户行" width="180"> </el-table-column>
          <el-table-column prop="status" label="审核状态" width="180"> </el-table-column>
        </el-table>
      </template>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        isvId:'123',
        name:'张三',
        phone:'123333333',
        bank:'中国银行',
        status:'审核中'
      }]
    };
  },
  mounted() {

  },
  methods: {
    
  }
};
</script>

<style scoped>
.el-table {
  margin-top: 20px;
}
</style>