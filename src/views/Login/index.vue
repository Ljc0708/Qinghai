<template>
  <div>
    <wavesBg :top="250" class="login-wrap"> </wavesBg>
    <div class="qh_login">
      <div class="qh_title">青海</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="userName">
          <el-input v-model="param.userName" placeholder="请输入用户名">
            <template #prepend>
              <el-icon :size="18"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="param.password"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <el-icon :size="18"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WavesBg from "../../components/waves.vue";
import { ref, reactive } from "vue";
import API from "../../api/api_user";
import { ElMessage } from "element-plus";
import router from "../../router/index"
export default defineComponent({
  name: "login",
  components: { WavesBg },
  setup() {
    const login = ref();
    //用户名/密码
    const param = reactive({
      userName: "",
      password: "",
    });
    //校验规则
    const rules = reactive({
      userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    });
    //登录
    const submitForm = () => {
      login.value.validate((valid: any) => {
        if (!valid) {
          ElMessage({
            message: "请输入用户名密码",
            type: "error",
          });
        } else {
          let loginFrom = new FormData();
          loginFrom.append("userName", param.userName.trim());
          loginFrom.append("password", param.password.trim());
          API.login(loginFrom).then((res: any) => {
            console.log(res)
            if(res.status === 1){
              router.push('/home')
            }
            // sessionStorage.setItem("token", res.token)
          });
        }
      });
    };
    return {
      login,
      param,
      rules,
      submitForm,
    };
  },
});
</script>

<style lang="scss" scoped>
.qh_login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.qh_title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.el-button {
  background-color: #003e5d;
  border: #003e5d;
}
</style>
