<template>
    <div>
    <section class="content">
      <div class="form-group">
        <div class="panel panel-primary">
          <div class="panel-heading">
              <div class="btn-group pull-right" v-if="!adicionando">
                  <a href="#" @click="adicionando = true;" class="btn btn-success" data-toggle="collapse" aria-expanded="false" data-target="#adicionar">
                    <span class="glyphicon glyphicon glyphicon-plus"/>
                  </a>
              </div>
              <div v-else class="btn-group pull-right" @click="adicionando = false">
                  <a href="#" class="btn btn-danger" data-toggle="collapse" aria-expanded="false" data-target="#adicionar">
                    <span class="glyphicon glyphicon glyphicon-minus"/>
                  </a>
              </div>              
              <h4>Cadastro de Usuários</h4>
          </div>
          <div id="adicionar" class="panel-body collapse">
            <form action="">
              <row>
                <div class="col-md-6">
                  <label for="name">NOME</label>
                  <input type="text" class="form-control" id="name" v-model="user.name" required>
                </div>
                <div class="col-md-6">
                  <label for="email">E-MAIL</label>
                  <input type="email" class="form-control" id="email" v-model="user.email" required>
                </div>
              </row>
              <row>
                <div class="col-md-4">
                  <label for="cargo">CARGO</label>
                  <input type="text" class="form-control" id="cargo" v-model="user.position" required>
                </div>
                <div class="col-md-4">
                  <label for="login">LOGIN</label>
                  <input type="login" class="form-control" id="login" v-model="user.login" required>
                </div>
                <div class="col-md-4">
                  <label for="senha">SENHA</label>
                  <input type="password" class="form-control" id="senha" v-model="user.password" required>
                </div>
              </row>
              <row>
                <div class="col-md-2">
                  <label for="fileUpload">AVATAR</label>
                  <input id="file" type="file" @change="onFileSelected">
                </div>
              </row>
              <row>
                <div class="col-md-4 col-md-offset-4 text-center">
                  <button @click.prevent="handleSubmitUser" class="btn btn-primary text-center btn-block">Salvar</button>
                </div>
              </row>
            </form>            
          </div>
        </div>
        <div class="panel panel-primary">
          <panel-heading description="Usuários"/>
          <div class="panel-body">
            <table class="table table-responsive table-bordered">
              <thead>
                <tr>
                  <th class="text-center">Código</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Login</th>
                  <th>Cargo</th>
                  <th colspan="2" class="text-center">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <td width="10%" class="text-center">{{user.id}}</td>
                  <td width="20%">{{user.name}}</td>
                  <td width="20%">{{user.email}}</td>
                  <td width="20%">{{user.login}}</td>
                  <td width="15%">{{user.position}}</td>
                  <td colspan="2" class="text-center" with="30%">
                    <button class="btn btn-sm btn-warning">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button class="btn btn-sm btn-danger">
                      <span class="glyphicon glyphicon-remove"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>        
      </div>
      <div>

      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PanelHeading from '../../../src/components/PanelHeading'
import VAInputGroup from '../../components/VAInputGroup'
import {ShowMessageSuccess, ShowMessageError} from '../../pages/ui-elements/SweetAlert'
export default {
  name: 'usuario',
  data: () => ({
    user: {'name': '', 'login': '', 'position': '', 'password': ''},
    selectedFile: '',
    adicionando: false
  }),
  components: {
    'panel-heading': PanelHeading,
    'va-input-group': VAInputGroup
  },
  created () {
    this.fetchUser()
  },
  methods: {
    ...mapActions([
      'saveUser',
      'fetchUser'
    ]),
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    handleSubmitUser () {
      let formData = new FormData()
      formData.append('image', this.selectedFile)
      formData.append('user', JSON.stringify(this.user))
      this.saveUser(formData).then((result) => {
        this.user = {'name': '', 'login': '', 'position': '', 'password': ''}
        ShowMessageSuccess('Usuário cadastrado com sucesso!')
      }).catch((err) => {
        ShowMessageError(err)
      })
    },
    ShowMessageSuccess,
    ShowMessageError
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  }
}
</script>

<style>
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
}
</style>
