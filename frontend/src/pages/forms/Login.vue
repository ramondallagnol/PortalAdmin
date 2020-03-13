<template>
  <div class="container">
    <div class="well bg-white">
      <fieldset class="content">
        <div class="form-group ls-login-user">
          <label for="userLogin">LOGIN</label>
          <input
            class="form-control ls-login-bg-user input-lg"
            id="userLogin"
            type="text"
            aria-label="Usuário"
            placeholder="Seu login"
            v-model="user.login"
          />
        </div>

        <div class="form-group ls-login-password">
          <label for="userPassword">SENHA</label>
          <input
            class="form-control ls-login-bg-password input-lg"
            id="userPassword"
            type="password"
            aria-label="Senha"
            placeholder="Sua senha"
            v-model="user.password"
          />
        </div>
        <button class="btn" id="btnLogin" @click="doUserAuth()">Entrar</button>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'login',
  methods: {
    ...mapActions(['userAuth']),
    doUserAuth () {
      let self = this
      this.userAuth(this.user).then((result) => {
        this.$router.push('/hello')
      }).catch(function (error) {
        self.showModal('error', JSON.parse(JSON.stringify(error)).response.data.error)
      })
    },
    showModal (type, message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
      })
    }
  },
  data: () => ({
    user: {login: 'anderson', password: '123456'}
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

.well {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

html, body, #app {
  min-height: 100%;
}

body {
  background: #000 url('../../assets/background.jpg') no-repeat;
  background-size: cover;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button, a {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 14px;
}

 .container {
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}

.content input {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
}

.content label {
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 8px;
}

#btnLogin  {
  border: 0px;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #003379;
  color: #fff;
  cursor: pointer;
}

#btnLogin:hover {
  background: #3a05de;
}

</style>
