<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link to="/" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.svg" :alt="$t('千葉県')" />
        </div>
        <h1 class="SideNavigation-Heading">
          {{ $t('新型コロナウイルス感染症') }}<br />
          {{ $t('対策サイト') }}
        </h1>
      </nuxt-link>
    </div>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="closeNavi"
      >
        mdi-close
      </v-icon>

      <div class="SideNavigation-LanguageMenu">
        <LanguageSelector />
      </div>
      <v-divider class="SideNavigation-HeadingDivider" />
      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
          <v-divider v-show="item.divider" class="SideNavigation-Divider" />
        </v-container>
      </v-list>
      <div class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <!-- <a
            href="https://line.me/R/ti/p/%40822sysfc"
            target="_blank"
            rel="noopener"
          >
            <img src="/line.png" alt="LINE" />
          </a>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/tochokoho"
            target="_blank"
            rel="noopener"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a> -->
          <a
            href="https://github.com/civictechzenchiba/covid19-chiba"
            target="_blank"
            rel="noopener"
          >
            <img src="@/assets/images/github.png" alt="GitHub" />
          </a>
        </div>
        <div class="SideNavigation-Copyright">
          <a
            href="//creativecommons.org/licenses/by/4.0/deed.ja"
            target="_blank"
            rel="noopener"
            class="license"
          >
            Under
            <img
              src="@/assets/images/cc-by-icon.svg?inline"
              alt="CC BY 4.0"
              class="license__icon"
            />
          </a>
          <div class="sponsor">
            <dl>
              <dt>Data by:</dt>
              <dd>
                <a
                  href="https://www.pref.chiba.lg.jp/"
                  target="_blank"
                  rel="noopener"
                  class="sponsor__data"
                >
                  {{ $t('千葉県') }}
                </a>
              </dd>
              <dd>
                <a
                  href="https://www.city.chiba.jp/hokenfukushi/kenkou/kikaku/kansensyoujyouhou.html"
                  target="_blank"
                  rel="noopener"
                  class="sponsor__data"
                >
                  {{ $t('千葉市') }}
                </a>
              </dd>
            </dl>
          </div>
          <div class="sponsor">
            Operations by:<br />
            <a
              href="https://sites.google.com/view/civictechzenchiba/"
              target="_blank"
              rel="noopener"
              class="sponsor__image"
            >
              <span>CivicTechZenChiba</span>
              <img
                src="@/assets/images/civictechzenchiba-icon.jpg"
                alt="CivicTechZenChiba Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  components: {
    ListItem,
    LanguageSelector
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items() {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('県内の最新感染動向'),
          link: this.localePath('/')
        },
        // {
        //   icon: 'covid',
        //   title: this.$t('If you have any symptoms'),
        //   link:
        //     'https://www.pref.chiba.lg.jp/shippei/kansenshou/2019-ncov.html',
        //   divider: true
        // },
        {
          icon: 'parent',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: this.localePath('/parent')
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('県民の皆様へ'),
          link: 'https://www.pref.chiba.lg.jp/shippei/kansenshou/2019-ncov.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: this.localePath('/worker'),
          divider: true
        },
        {
          title: this.$t('新型コロナウイルス感染症への対応について'),
          link:
            'https://www.pref.chiba.lg.jp/cate/kfk/kenkou-iryou/kenkouzukuri/kansenshou/coronavirus.html'
        },
        {
          title: this.$t('電話相談窓口について'),
          link:
            'https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudan.html'
        },
        {
          title: this.$t('臨時休館情報'),
          link:
            'https://www.pref.chiba.lg.jp/kouhou/homepage/2019/ncov-index.html',
          divider: true
        },
        {
          title: this.$t('知事からのメッセージ'),
          link:
            'https://www.pref.chiba.lg.jp/kenfuku/kansenshou/ncov/mes-chiji.html'
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('千葉県公式ホームページ'),
          link: 'https://www.pref.chiba.lg.jp/',
          divider: true
        }
      ]
    },
    isClass() {
      return item => (item.title.charAt(0) === '【' ? 'kerningLeft' : '')
    }
  },
  methods: {
    openNavi() {
      this.$emit('openNavi')
    },
    closeNavi() {
      this.$emit('closeNavi')
    }
  }
}
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  height: 100%;
  background: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 0 7px 20px;
    }
  }
  &-HeadingIcon {
    margin-right: 16px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    margin: 24px 16px 24px;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 20px 16px 0 0;
    width: 110px;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #707070;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-HeadingDivider {
    margin: 12px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SocialLinkContainer {
    display: flex;
    & img {
      width: 30px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    color: $gray-1;
  }
}
.open {
  @include lessThan($small) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: z-index-of(opened-side-navigation);
    background-color: $white;
    /* stylelint-disable */
    overflow-y: scroll; // TODO: Issue#81の暫定対応
    /* stylelint-enable */
    -webkit-overflow-scrolling: touch;
  }
}
@include largerThan($small) {
  .pc-none {
    display: none;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-none {
    display: none;
  }
}
.license {
  text-decoration: none;
  color: $gray-1;
  font-size: 16px;

  &__title {
    display: inline-block;
    width: 0;
    height: 1.5rem;
    overflow: hidden;
  }

  &__icon {
    display: inline-block;
    height: 24px;
  }
}
.sponsor {
  color: $gray-1;
  font-size: 16px;

  &:nth-child(n + 2) {
    margin-top: 12px;
  }

  &__data {
    font-size: 26px;
    text-decoration: none;
    color: $gray-1;

    &:hover {
      opacity: 0.6;
    }
  }

  &__image {
    display: block;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
    }

    img {
      width: 64px;
      height: 64px;
    }
  }
}
</style>
