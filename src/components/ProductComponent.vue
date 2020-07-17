<template>
  <div>
     <v-app-bar class="bar"
      color="#8080ff"
      dense
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Notebook Shop</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
  </v-app-bar>
  <v-card>
    <v-container>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.id"
            :cols="card.flex"
          >
            <!-- <a v-bind:href="card.url">  v-on:click="detail(card.id)" -->
              <v-card v-bind:href="card.url">
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.20)"
                  height="250px"
                >

                </v-img>
                  <v-card-title v-text="card.title" class=""></v-card-title>
                  <v-card-text class="text--primary text-spec">
                    <div>CPU : Intel Core i7-10875H</div>
                    <div>GPU : NVIDIA GeForce RTX 2070 Max-Q (8GB GDDR6)</div>
                    <div>RAM : 32 GB DDR4</div>
                  </v-card-text>
                  <!-- <v-card-subtitle class="">CPU : Intel Core i7-10875H</v-card-subtitle>
                  <v-card-subtitle class="">GPU : NVIDIA GeForce RTX 2070 Max-Q (8GB GDDR6)</v-card-subtitle>
                  <v-card-subtitle class="">RAM : 32 GB DDR4</v-card-subtitle> -->
                <v-card-actions>

                  <v-spacer></v-spacer>

                  <!-- <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn> -->
                </v-card-actions>
              </v-card>
            <!-- </a> -->
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { id: 0, title: 'MSI Creator 17 A10SF-215TH', src: 'https://notebookspec.com/nbs/upload_notebook/20200602-161651_c.jpg', url: 'https://notebookspec.com/notebook/10120-MSI-Creator-17-A10SF-215TH.html', flex: 4 },
      { id: 1, title: 'Acer Swift 3 SF314-42-R18J', src: 'https://notebookspec.com/web/notebook-picture/Acer/Swift%203%20SF314-42-R18J/Swift%203%20SF314-42-R18J-l.jpg', url: 'https://notebookspec.com/notebook/10016-Acer-Swift-3-SF314-42-R18J.html', flex: 4 },
      { id: 2, title: 'Acer Predator Triton 500 PT515-52-70RD', src: 'https://notebookspec.com/web/notebook-picture/Acer/Predator%20Triton%20500/Predator%20Triton%20500-bo.jpg', url: 'https://notebookspec.com/notebook/10167-Acer-Predator-Triton-500-PT515-52-70RD.html', flex: 4 },
      { id: 3, title: 'HP OMEN X 15-dg0011TX', src: 'https://notebookspec.com/web/notebook-picture/HP/Omen%20X%202S%2015/Omen%20X%202S%2015-f.jpg', url: 'https://notebookspec.com/notebook/9370-HP-OMEN-X-15-dg0011TX-.html', flex: 4 },
      { id: 4, title: 'DELL Inspiron 14 7490-W56705106THW10', src: 'https://notebookspec.com/web/notebook-picture/DELL/Inspiron%207490%20(Ice%20Berry)/Inspiron%207490%20(Ice%20Berry)-bk.jpg', url: 'https://notebookspec.com/notebook/10072-DELL-Inspiron-14-7490-W56705106THW10-.html', flex: 4 },
      { id: 5, title: 'Lenovo Legion 5-82B5001CTA', src: 'https://notebookspec.com/web/notebook-picture/Lenovo/Legion%205/Legion%205-f.jpg', url: 'https://notebookspec.com/notebook/10145-Lenovo-Legion-5-82B5001CTA.html', flex: 4 },
      { id: 6, title: 'Asus X409FL-EK022T', src: 'https://notebookspec.com/nbs/upload_notebook/20190626-150534_f.jpg', url: 'https://notebookspec.com/notebook/9327-Asus-X409FL-EK022T.html', flex: 4 },
      { id: 7, title: 'Asus VivoBook S14 S431FL-AM035T', src: 'https://notebookspec.com/nbs/upload_notebook/20190626-143629_l.jpg', url: 'https://notebookspec.com/notebook/9313-Asus-VivoBook-S14-S431FL-AM035T.html', flex: 4 },
      { id: 8, title: 'MSI GF63 Thin 9SCXR-608TH', src: 'https://notebookspec.com/web/notebook-picture/MSI/GF63%20Thin%209SCXR/GF63%20Thin%209SCXR-f.jpg', url: 'https://notebookspec.com/notebook/10196-MSI-GF63-Thin-9SCXR-608TH.html', flex: 4 },
      { id: 9, title: 'MSI GE66 Raider 10SF-404TH', src: 'https://notebookspec.com/web/notebook-picture/MSI/GE66%20Raider/GE66%20Raider-f.jpg', url: 'https://notebookspec.com/notebook/10205-MSI-GE66-Raider-10SF-404TH-.html', flex: 4 },
      { id: 10, title: 'Asus ROG Zephyrus Duo 15 GX550LWS-HF062T', src: 'https://notebookspec.com/web/notebook-picture/Asus/ROG%20Zephyrus%20Duo%2015/ROG%20Zephyrus%20Duo%2015-c.jpg', url: 'https://notebookspec.com/notebook/10187-Asus-ROG-Zephyrus-Duo-15-GX550LWS-HF062T.html', flex: 4 },
      { id: 11, title: 'Acer Nitro 5 AN515-54-56JJ', src: 'https://notebookspec.com/web/notebook-picture/Acer/Aspire%20Nitro%205%202019/Aspire%20Nitro%205%202019-bo.jpg', url: 'https://notebookspec.com/notebook/9696-Acer-Nitro-5-AN515-54-56JJ.html', flex: 4 }
    ]
  }),
  methods: {
    detail (id) {
      console.log(this.cards[id])
    }
  }
}
</script>

<style>
  .bar{
    box-shadow: 0px 5px 15px #888888 !important;
    position: relative;
    z-index: 1;
  }
  .v-card__title{
    padding-bottom: 0px!important;
    font-size: 14px !important;
    font-weight: bold;
  }
  .text-spec{
    font-size: 12px !important;
  }
</style>
