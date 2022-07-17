<script>
import { defineComponent, h, PropType } from 'vue'

import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    }
  },
  setup(props) {
    const chartData = {
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

      labels: ["France", "États-Unis", "Espagne", "Italie", "Austria"]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    }

    return () =>
      h(Doughnut, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})
</script>
