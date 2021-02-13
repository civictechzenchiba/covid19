<template>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else>
    <v-col cols="12" md="6" class="DataCard">
      <client-only>
        <time-bar-chart
          title="確定日別による陽性者数の推移"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="patientsDate"
          :by-date="true"
          :unit="'人'"
        >
          <template v-slot:description>
            <div :class="$style.note">
              （注）<br />
              <p>
                ・検査による確定日の数値を掲載。<br />
                ・公表後の追確認により変動することがある。
              </p>
            </div>
          </template>
        </time-bar-chart>
      </client-only>
    </v-col>
  </div>
</template>

<script>
import axios from 'axios'
import TimeBarChart from '@/components/TimeBarChart.vue'
import formatGraph from '@/utils/formatGraph'
export default {
  components: {
    TimeBarChart
  },
  data() {
    const data = {
      DataPub: {},
      patientsGraph: {},
      patientsDate: {},
      loading: true,
      errored: false,
      headerItem: {}
    }
    return data
  },
  mounted() {
    axios
      .get('https://covid19chiba.s3-ap-northeast-1.amazonaws.com/DataPub.json')
      .then(response => {
        this.DataPub = response.data
        this.headerItem = {
          icon: 'mdi-chart-timeline-variant',
          title: '県内の最新感染動向',
          date: this.DataPub.lastUpdate
        }
        this.patientsDate = this.DataPub.patients_summary.date
        this.patientsGraph = formatGraph(this.DataPub.patients.data)
      })
      .catch(error => {
        this.errored = true
        this.error = error
      })
      .finally(() => (this.loading = false))
  }
}
</script>
<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0em;
  font-size: 12px;
  color: $gray-3;
}
.note p {
  padding-left: 1em;
}
</style>
