<template>
  <data-view
    :title="'検査陽性者の状況'"
    :title-id="'details-of-confirmed-cases'"
    :date="Data.patients.date"
  >
    <template v-slot:button>
      <div :class="$style.note">
        （注）<br />
        <p>
          ・県内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載。<br />
          ・チャーター機帰国者、クルーズ船乗客等は含まれていない。<br />
          ・公表後の追確認により変動することがある。
        </p>
      </div>
    </template>
    <confirmed-cases-details-table
      :aria-label="'検査陽性者の状況'"
      v-bind="confirmedCases"
    />
  </data-view>
</template>

<style lang="scss" module>
div.note {
  margin-top: 10px;
  margin-bottom: 0em;
  font-size: 12px;
  color: $gray-3;
}
div.note p {
  padding-left: 1em;
}
</style>

<script>
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)
    const data = {
      Data,
      confirmedCases
    }
    return data
  }
}
</script>
