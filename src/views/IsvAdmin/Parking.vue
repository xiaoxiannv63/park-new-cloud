<template>
  <div>
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="isvId" label="isvPid" width="180"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
          <el-table-column prop="phone" label="手机号" width="180"> </el-table-column>
          <el-table-column prop="bank" label="开户行" width="180"> </el-table-column>
          <el-table-column prop="status" label="审核状态" width="180"> </el-table-column>
        </el-table>
      </template>
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
      }],
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