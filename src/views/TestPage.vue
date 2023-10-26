<template>
  <div>
    <bar-chart :data="chartData" :options="chartOptions" width="400" height="200"></bar-chart>
  </div>
</template>

<script>
import axios from 'axios';
import { Bar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  data() {
    return {
      chartOptions: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Count',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Items',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Count',
              },
            },
          ],
        },
      },
    };
  },
  async mounted() {
    // Access the data from your API
    const response = await this.fetchData();
    this.chartData = this.constructChartData(response);
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://agriventures.tech/api/getUser/u1DfANKqCB4QgLSHO7aIdsmo2RkjV69GxcewZPMylFrpTJvEIoL');
        return response.data; // Assuming the response is in JSON format
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    },
    constructChartData(response) {
      if (!response || !response.cart || isNaN(response.cart.count)) {
        // Handle data format errors
        return {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
            },
          ],
        };
      }

      return {
        labels: ['Cart'],
        datasets: [
          {
            data: [response.cart.count],
            backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
          },
        ],
      };
    },
  },
};
</script>
