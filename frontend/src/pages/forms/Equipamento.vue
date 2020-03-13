<template>
  <div>
    <section class="content">
      <div class="form-group">
        <div class="panel panel-primary">
          <panel-heading description="Cadastro de Equipamentos"/>
          <div class="panel-body">
            <row>
              <div class="col-md-6">
                <label for="marca">Marca</label>
                <select name="marca" id="marca" class="form-control">
                  <option value="">(Selecione uma marca)</option>
                  <option value="1">Dell</option>
                  <option value="2">Samsung</option>
                  <option value="3">LG</option>
                  <option value="4">Apple</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="codigoBarras">Modelo</label>
                <input type="text" class="form-control">
              </div>
            </row>
            <row>

            </row>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PanelHeading from '../../../src/components/PanelHeading'
export default {
  name: 'equipamento',
  created () {

  },
  components: {
    'panel-heading': PanelHeading
  }
}
</script>

<style>

</style>
