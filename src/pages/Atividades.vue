<template>
   <q-page padding class="container">
     <header><h2>Atividades</h2></header>
     <div class="q-pa-md">
     <q-table
       title="Atividades"
       :dense="$q.screen.lt.md"
       :data="atividade"
       :columns="columns"	
       row-key="name"
       :grid="$q.screen.sn || $q.screen.xs"
       spinner-color="indigo-3"
       />
     </div>
    </q-page>
</template>

<script>
export default {
  name: 'ListaAtividades',
  data () {
  	return {
  		atividade: [],
  		columns:[{
  			name: 'id',
  			required: true,
  			label: 'ID',
  			align: 'left',
  			field: row => row.id,
  			format: val => '${val}',
  			sortable: true
  			},
  			{ name: 'email', label: 'E-mail', field: 'email', sortable: true, align: 'left'},
  			{ name: 'name', label: 'Nome', field: 'name', sortable: true, align: 'left'},
  			{ name: 'body', label: 'Comentário', field: 'body', sortable: true, align: 'left'}
  		]	
    }  
  },
 methods: {
  	loadAtividades () {
  		this.$axios.get('https://jsonplaceholder.typicode.com/comments/').then(response =>{
  			this.atividade = response.data
  		})
  	}
  },
  beforeMount (){
  	this.loadAtividades()
  }
 }
</script>
