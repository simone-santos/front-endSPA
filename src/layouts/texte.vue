<q-layout view="hhr lpr ffr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          SPA App
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>

   <q-footer>
    <q-toolbar >SPA app 2021&copy;</q-toolbar>
   </q-footer>

    <q-drawer v-model="leftDrawerOpen"  show-if-above  bordered  content-class="bg-grey-1">
        <q-list>
          <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>