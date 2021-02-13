<template>
  <component :is="cardComponent" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
// 報告日別による陽性者数の推移
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
@Component({
  components: {
    // ---- モニタリング項目
    ConfirmedCasesNumberCard
  }
})
export default class CardContainer extends Vue {
  data() {
    let title, updatedAt, cardComponent
    switch (this.$route.params.card) {
      // NOTE: 以下，ブラウザでの表示順に合わせて条件分岐を行う
      // ---- モニタリング項目
      // 報告日別による陽性者数の推移
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        break
    }
    return {
      cardComponent,
      title,
      updatedAt
    }
  }

  head() {
    return {
      title: '県内の最新感染動向'
    }
  }
}
</script>
