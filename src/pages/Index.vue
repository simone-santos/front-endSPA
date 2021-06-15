<template>
  <q-page class="container">
    <div id="info">
        <div class="row justify-center q-pa-lg">
        	<div class="col col-xs-12 col-sm-12 col-md-5 col-lg-3">
              <header><h2>Cursos de Tecnologia e Negócios Digitais</h2></header>
              <p>Você vai estudar, praticar, discutir e aprender em uma comunidade de inquietos e inovadores.</p>
            </div>
              <div class="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
               <img src="../assets/estudante.svg" alt="uma estudante com seus livros"/>   		
           </div>
        </div>	
    </div> <!-- /#info -->
    <section id="descCursos" class="q-pb-xl">
      <div class="row justify-center q-pa-lg items-start q-gutter-md">
      <hearder><h3 class="text-cyan-10">Formações</h3></hearder>
      </div>
      <div class="q-pa-md row justif-start wrap q-gutter-md justify-center">
    <q-card class="my-card" v-for="curso in cursos" :key="curso.id">
     <q-card-section>
      <q-img :src="curso.imagem" spinner-color="white" />
       <div class="text-h5 text-indigo-9">{{ curso.titulo }}</div>
      </q-card-section>
     
     <q-card-section class="q-pt-nome">
       <p>{{ curso.descricao }}</p>
       <q-btn color="primary" label="Começar" />
     </q-card-section>
    </q-card>
     </div> 
  </section> <!-- /#descCursos -->
  <section id="depoimentos" class="bg-indigo-1 q-pb-xl">
   <div class="row q-pa-md q-gutter-md">
    <div class="col col-lg-4 offset-lg-2">
      <header><h4 class="text-blue-9 q-mt-xs">A maior plataforma brasileira de cursos de tecnologia.</h4>
      </header>
      <p class="text bady1">São 1272 cursos, 100% em português. E novos lançamentos todas as semanas.</p>
  </div> <!-- /.col -->
   <div class="col col-lg-2">
  <q-card class="p-pa-md">
     <q-card-section>
       <div class="text-h5 text-indigo-9">José Pedro</div>
      </q-card-section>
     
     <q-card-section class="q-pt-nome">
       <p>Se você não sabe a ordem do que deve aprender e praticar para dominar uma tecnologia, a forma como os cursos estão organizados e estruyurados nos ajuda muito.</p>
     </q-card-section>
    </q-card>
   </div> <!-- /.col -->
   <div class="col col-lg-2">
  <q-card class="p-pa-md">
     <q-card-section>
       <div class="text-h5 text-indigo-9">Mariana Souza</div>
      </q-card-section>
     
     <q-card-section class="q-pt-nome">
       <p>Consegui fazer uma mundça de carreira em uma área muito disputada e estou muito feliz:</p>
     </q-card-section>
    </q-card>
   </div> <!-- /.col -->
  </div> <!-- /.row -->
</section> <!-- /#depoimentos -->
</q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data (){
  	return {
  		cursos:[{
  			id:1,
  			titulo: "Curso HTML5 e CSS3",
  			descricao: "O Curso de HTML5 e CSS3 vai ensinar a criar sites usando a linguagem de marcação hipertexto (HTML) e folhas de estilo em cascata (CSS).",
        imagem:"../../formacoes/css-file.svg"
  		},
  		{
  			id:2,
  			titulo: "Git e GitHub",
  			descricao: "Curso de Git e GitHub: grátis, prático e sem usar comandos do terminal.",
         imagem:"../../formacoes/git.svg"
  		},
  		{
  			id:3,
  			titulo: "Javascript",
  			descricao: "Curso de Javascript, voltado para iniciantes sobre ECMAScript, a versão padronizada do JS.",
         imagem:"../../formacoes/coding.svg"
  		},
  		{
  			id:4,
  			titulo: "Vue.js",
  			descricao: "Construa do zero uma Singla page Applicantion e crie seus próprio componentes.",
         imagem:"../../formacoes/device.svg"
		}]
 	}
  }
}
</script>

<style>
	div#info{
	background-color: #2a7ae4;
	color: #fff;
	}
div#info h2{
	font-weight: 800;
}
div#info p{
	font-size: 23px;
}
section#descCursos h3{
	margin-bottom: 0.2em;
   font-weight: 300;

}
   
.my-card{
	width: 100%;
    max-width: 250px;
}	
</style>