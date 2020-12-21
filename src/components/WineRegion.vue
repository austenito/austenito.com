<script>
import { Doughnut, Scatter } from "vue-chartjs";

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      datasets: [
        {
          data: [19, 18, 2, 1, 1],
          backgroundColor: [
            "#1E90FF",
            "#B22222",
            "#9370DB",
            "#FF7F50",
            "#32CD32",
          ],
        },
      ],

      labels: ["France", "États-Unis", "Espagne", "Italie", "Austria"],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style>
</style>