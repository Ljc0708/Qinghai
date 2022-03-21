<template>
  <div>
    <div class="home_main">
      <div class="box">
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
      </div>
      <div class="box">
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
      </div>
      <div class="box">
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
        <div class="box_data"><span>{}</span><span>{}</span></div>
      </div>
      <div class="box users">
        <div class="Online_users">在线用户</div>
        <el-table :data="tableData" border style="width: 100%" max-height="250">
          <el-table-column prop="date" label="名称" />
          <el-table-column prop="name" label="职位" />
          <el-table-column prop="state" label="手机号" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";
export default defineComponent({
  setup() {
    const tableData = reactive([
      {
        date: "admin",
        name: "管理员",
        state: "10086",
      },
      {
        date: "admin",
        name: "管理员",
        state: "10086",
      },
      {
        date: "admin",
        name: "管理员",
        state: "10086",
      },
      {
        date: "admin",
        name: "管理员",
        state: "10086",
      },
      {
        date: "admin",
        name: "管理员",
        state: "10086",
      },
      {
        date: "admin",
        name: "管理员",
        state: "10086",
      },
    ]);
    return {
      tableData,
    };
  },
});
</script>

<style lang="scss" scoped>
.home_main {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  .box {
    width: 23%;
    height: 500px;
    .box_data {
      width: 100%;
      height: 24.5%;
      border: 1px solid black;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .users {
    display: flex;
    align-items: center;
    flex-direction: column;
    // border: 1px solid black;
    .Online_users {
      width: 200px;
      height: 40px;
      background-color: #483d8b;
      text-align: center;
      line-height: 40px;
      border-radius: 20px;
      color: #E6E6FA;
    }
  }
}
.el-table--fit{
    margin-top: 20px;
}
</style>
