<template>
  <div class="fullscreen bg-404 text-white text-center q-pa-md container">
    <div>
      <q-toolbar-title class="text-h4">
       <q-avatar>
        <img src="../../public/imagens/study.svg" alt="Logo Cursos"/>
       </q-avatar>
       Cursos
      </q-toolbar-title>
      </div>
      <div class="flex flex-center">
      <div>
      <div style="font-size: 20vh">
        404
      </div>
      <img src="../../public/imagens/404.svg" style="width: 40%; height:40%" alt=""/>
      <div class="text-h2" style="opacity:.4">
        Oops. Algo não funcionou corretamente...
      </div>

      <q-btn
        class="q-mt-xl"
        color="blue-3"
        text-color="blue"
        unelevated
        to="/"
        label="Retornar ao início"
        no-caps
        icon="arrow_back"
      />
    </div>
  </div>
  </div>
</template>

<style type="text/css">
.bg-404{
    background-color: #2a7ae4;
  }
</style>

export default {
  name: 'Error404'
}

