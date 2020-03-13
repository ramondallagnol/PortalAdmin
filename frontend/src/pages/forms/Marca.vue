<template>
  <div>
    <section class="content">
      <div class="form-group">
        <div class="panel panel-primary">
          <panel-heading description="Cadastro de Marcas"/>
          <div class="panel-body">
            <row>
              <div class="col-md-12">
                <label for="codigoBarras">Descrição</label>
                <input v-model="description" type="text" class="form-control">
                <small>Informe aqui a descrição da marca. Ex.: Apple, Dell, Samsung</small>
              </div>
            </row>
            <row>
              <div class="col-md-12 text-center">
                <button @click="doSaveBrand" class="btn btn-primary text-center btn-block">Salvar</button>
              </div>
            </row>
          </div>
        </div>
        <div class="panel panel-primary">
          <panel-heading description="Marcas"/>
          <div class="panel-body">
            <table class="table table-responsive table-bordered">
              <thead>
                <tr>
                  <th class="text-center">Código</th>
                  <th>Descrição</th>
                  <th class="text-center">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(brand,index) in brands" :key="index">
                  <td class="text-center" width="20%"> {{brand.id}}</td>
                  <td width="70%">
                    <input
                      :disabled="selected!==index" 
                      type="text"
                      @input="updatedDescription()" 
                      :class="selected!==index ? 'form-control form-control-sm disabled-input' : 'form-control form-control-sm'" 
                      :value="brand.description"
                    >
                  </td>
                  <td class="text-center" with="10%">
                    <button v-if="selected!==index" @click="editing(brand, index)" class="btn btn-sm btn-warning">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button v-else @click="doEditBrand(brand)" class="btn btn-sm btn-success">
                      <span class="glyphicon glyphicon glyphicon-ok"></span>
                    </button>
                    <button @click="doDeleteBrand(brand)" class="btn btn-sm btn-danger">
                      <span class="glyphicon glyphicon-remove"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PanelHeading from '../../../src/components/PanelHeading'
import VAButton from '../../../src/components/VAButton'
import Swal from 'sweetalert2'

export default {
  name: 'marca',
  data: () => ({
    description: '',
    selected: -1
  }),
  created () {
    this.fetchBrand()
  },
  components: {
    'panel-heading': PanelHeading,
    'va-button': VAButton
  },
  methods: {
    ...mapActions([
      'fetchBrand',
      'saveBrand',
      'deleteBrand',
      'updateBrand'
    ]),
    doSaveBrand () {
      this.saveBrand({description: this.description})
    },
    doDeleteBrand (brand) {
      Swal.fire({
        title: 'Deseja realmente excluir esta marca?',
        text: 'Você não poderá voltar atrás!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim!'
      }).then((result) => {
        if (result.value) {
          this.deleteBrand({brand_id: brand.id})
          Swal.fire(
            'Excluída!',
            'Marca excluída com sucesso.',
            'success'
          )
        }
      })
    },
    doEditBrand () {
      this.updateBrand()
    },
    editing (brand, index) {
      this.selected = index
      this.$store.commit('EDIT_BRAND', brand)
    },
    updatedDescription (el) {
      this.$store.commit('UPDATE_BRAND_DESCRIPTION', el.target.value)
    }
  },
  computed: {
    ...mapGetters([
      'brands',
      'brand'
    ])
  }
}
</script>

<style>
  .disabled-input {
    border-color: white !important; 
    box-shadow: none;
    -webkit-box-shadow: none;
    background-color: white !important;
  }
</style>
