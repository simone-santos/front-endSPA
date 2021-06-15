<template>
  <q-page padding class="container">
    <header><h2>Usuários</h2></header>
    <dir class="row q-gutter-lm">
       <dir class="col col-md-4" v-for="usuario in usuarios" :key="usuario.id">
       	<q-card class="p-pa-md">
         <q-card-section>
         	<q-item-section avatar>
         	 <q-avatar>
         	  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
         	  </q-avatar>
         	  </q-item-section>	
          <div class="text-h6 text-indigo-9">{{ usuario.name }}</div>
          <dir class="tex-subtitle2">{{ usuario.email}}</dir>
      </q-card-section>
     <q-separator insert />
     <q-card-section class="q-pt-nome">
     	<p class="text-h6">Endereço</p>
       <p>{{ usuario.address.street }}, {{ usuario.address.suite }}. <br/>{{ usuario.address.city }}</p>
     </q-card-section>
    </q-card>	
  </dir> <!-- /.col -->	
</dir> <!-- /.row -->
</q-page>
</template>

<script>
export default {
  name: 'Usuarios',
  data () {
  	return {
  		usuarios: []
  	}
  },
  methods: {
  	viewUsuarios (){
  		this.$axios.get('https://jsonplaceholder.typicode.com/users/').then(response =>{
  			this.usuarios = response.data
  		})
  	}
  },
  beforeMount (){
  	this.viewUsuarios()
  }
}
</script>
