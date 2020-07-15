<template>
  <div class="about">
    <!-- <span class="bg"></span> -->
    <v-parallax
    height="695"
    src="https://pluto-men.com/wp-content/uploads/2019/03/Top-10-reasons-why-Laravel-is-perfect-for-web-development-_-Banner-Image-_-Plutomen-Insights.png"
    >
      <v-card
        class="card"
      >
        <v-card-text>
          <v-row>
            <v-col>
              <!-- <h1>Arkkarachat Siribout</h1> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <h3>Language Skills</h3>
              <canvas class="myChartSkills"  id="myChartSkills"></canvas>
            </v-col>
            <v-col cols="6">
              <div class="avatar">
                <p>
                  <v-avatar
                    size="150"
                  >
                      <v-img
                        src="https://intranet.inet.co.th/assets/upload/staff/20058s.jpg"
                      />
                  </v-avatar>
                </p>
              </div>
              <h2><p>Position : Software Engineer</p></h2>
              <h2><p>Phone : 063-2314401 </p></h2>
              <h2><p>Email : arkkarachat.si@mandala.co.th </p></h2>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-parallax>
  </div>
</template>
<style>
  .bg{
    width: 100%;
    height: 660px;
    position: absolute;
    top: 0;
    left: 0;
    background: url( 'https://pluto-men.com/wp-content/uploads/2019/03/Top-10-reasons-why-Laravel-is-perfect-for-web-development-_-Banner-Image-_-Plutomen-Insights.png') no-repeat center center;
    background-size: cover;
    background-color: red;
    transform: scale(1.1);
  }
  .v-parallax__content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card{
    opacity: 85%;
    width: 1000px;
  }
  .myChartSkills{
    width: 70vw;
    height: 50vh;
    position: relative;
  }
 .avatar{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<script>
import Chart from 'chart.js'

export default {
  // myChart
  methods: {
    myChartSkills () {
      const ctx = document.getElementById('myChartSkills')
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          responsive: true,
          labels: ['PHP', 'Javascript', 'MySQL', 'CSS', 'Vue', 'React'],
          datasets: [{
            label: '',
            data: [80, 63, 75, 40, 30, 30],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)'
            ],
            borderColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)'
            ]
            // borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          }
        }
      })
      return myChart
    }
  },
  mounted () {
    this.myChartSkills()
  }
}
</script>
