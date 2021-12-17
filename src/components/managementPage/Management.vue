<template>
  <section class="management">
    <div class="management__container">
      <div class="management__content">
        <div class="management__department" id="governingBody" ref="block1">
          <GoverningBody />
        </div>

        <div class="management__department" id="boardOfDirectors" ref="block2">
          <BoardOfDirectors />
        </div>

        <div class="management__department" id="team" ref="block3">
          <Team />
        </div>

        <div class="management__department" id="auditCommittee" ref="block4">
          <AuditCommittee />
        </div>

        <div class="management__department" id="chiefAccountant" ref="block5">
          <ChiefAccountant />
        </div>

        <div class="management__department" id="controller" ref="block6">
          <Controller />
        </div>

        <div class="management__department" id="generalMeetingOfShareholders" ref="block7">
          <GeneralMeetingOfShareholders />
        </div>
      </div>

      <div class="management__bar-container" ref="barContainer">
        <aside class="management__bar-nav" :style="barStyle">
          <div class="management__bar-icon" :style="iconStyle">
            <DarkIcon icon="Arrow Down" />
          </div>

          <router-link class="management__bar-link" :to="{ path: '/management#governingBody' }"
            >Правление</router-link
          >

          <router-link class="management__bar-link" :to="{ path: '/management#boardOfDirectors' }"
            >Совет директоров</router-link
          >

          <router-link class="management__bar-link" :to="{ path: '/management#team' }"
            >Команда</router-link
          >

          <router-link class="management__bar-link" :to="{ path: '/management#auditCommittee' }"
            >Ревизионная комиссия</router-link
          >

          <router-link class="management__bar-link" :to="{ path: '/management#chiefAccountant' }"
            >Главный бухгалтер</router-link
          >

          <router-link class="management__bar-link" :to="{ path: '/management#controller' }"
            >Контролер</router-link
          >

          <router-link
            class="management__bar-link"
            :to="{ path: '/management#generalMeetingOfShareholders' }"
            >Собрание акционеров</router-link
          >
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import GoverningBody from '@/components/managementPage/GoverningBody.vue';
import BoardOfDirectors from '@/components/managementPage/BoardOfDirectors.vue';
import Team from '@/components/managementPage/Team.vue';
import AuditCommittee from '@/components/managementPage/AuditCommittee.vue';
import ChiefAccountant from '@/components/managementPage/ChiefAccountant.vue';
import Controller from '@/components/managementPage/Controller.vue';
import GeneralMeetingOfShareholders from '@/components/managementPage/GeneralMeetingOfShareholders.vue';
import DarkIcon from '@/components/general/DarkIcon.vue';

export default {
  name: 'Management',
  data() {
    return {
      barContainerTop: 0,
      positionBarNav: 'absolute',
      iconTop: 0,

      h00: 552,
      h01: 0,
      h02: 0,
      h03: 0,
      h04: 0,
      h05: 0,
      h06: 0,
      h07: 0,
    };
  },
  computed: {
    barStyle() {
      return {
        position: `${this.positionBarNav}`,
        top: 0,
      };
    },
    iconStyle() {
      return {
        top: `${this.iconTop * 48}px`,
      };
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      console.log('hi');
      this.getTopBarContainer();
      this.changeStyleBarNav();
      this.getTopAllComponents();
      this.getIconTop();
      // console.log(scrollY);
    },
    getTopBarContainer() {
      const barContainer = this.$refs.barContainer;
      this.barContainerTop = barContainer.getBoundingClientRect().top;
    },
    changeStyleBarNav() {
      if (this.barContainerTop > 0) {
        this.positionBarNav = 'absolute';
      } else {
        this.positionBarNav = 'fixed';
      }
    },
    getTopAllComponents() {
      const block1 = this.$refs.block1;
      this.h01 = block1.getBoundingClientRect().height;
      // console.log(this.h01);

      const block2 = this.$refs.block2;
      this.h02 = block2.getBoundingClientRect().height;
      // console.log(this.h02);

      const block3 = this.$refs.block3;
      this.h03 = block3.getBoundingClientRect().height;
      // console.log(this.h03);

      const block4 = this.$refs.block4;
      this.h04 = block4.getBoundingClientRect().height;
      // console.log(this.h04);

      const block5 = this.$refs.block5;
      this.h05 = block5.getBoundingClientRect().height;
      // console.log(this.h05);

      const block6 = this.$refs.block6;
      this.h06 = block6.getBoundingClientRect().height;
      console.log(this.h06);

      const block7 = this.$refs.block7;
      this.h07 = block7.getBoundingClientRect().height;
      //  console.log(this.h07)
    },

    getIconTop() {
      if (scrollY >= 552 && scrollY < 552 + this.h01) {
        // console.log('01');
        this.iconTop = 0;
      } else if (scrollY >= 552 + this.h01 && scrollY < 552 + this.h01 + this.h02) {
        // console.log('02');
        this.iconTop = 1;
      } else if (
        scrollY >= 552 + this.h01 + this.h02 &&
        scrollY < 552 + this.h01 + this.h02 + this.h03
      ) {
        // console.log('03');
        this.iconTop = 2;
      } else if (
        scrollY >= 552 + this.h01 + this.h02 + this.h03 &&
        scrollY < 552 + this.h01 + this.h02 + this.h03 + this.h04
      ) {
        // console.log('04');
        this.iconTop = 3;
      } else if (
        scrollY >= 552 + this.h01 + this.h02 + this.h03 + this.h04 &&
        scrollY < 552 + this.h01 + this.h02 + this.h03 + this.h04 + this.h05
      ) {
        // console.log('05');
        this.iconTop = 4;
      } else if (
        scrollY >= 552 + this.h01 + this.h02 + this.h03 + this.h04 + this.h05 &&
        scrollY < 552 + this.h01 + this.h02 + this.h03 + this.h04 + this.h05 + this.h06 - 21
      ) {
        // console.log('06');
        console.log(552 + this.h01 + this.h02 + this.h03 + this.h04 + this.h05);
        console.log(552 + this.h01 + this.h02 + this.h03 + this.h04 + this.h05 + this.h06 - 19);
        this.iconTop = 5;
      } else if (
        scrollY >= 552 + this.h01 + this.h02 + this.h03 + this.h04 + this.h05 + this.h06 - 21 &&
        scrollY < 552 + this.h01 + this.h02 + this.h03 + this.h04 + this.h05 + this.h06 + this.h07
      ) {
        // console.log('07');
        this.iconTop = 6;
      }
    },
  },

  components: {
    GoverningBody,
    BoardOfDirectors,
    Team,
    AuditCommittee,
    ChiefAccountant,
    Controller,
    GeneralMeetingOfShareholders,
    DarkIcon,
  },
};
</script>

<style lang="scss" scoped>
// management
.management {
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  &__container {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 944px) {
      flex-wrap: nowrap;
    }
  }

  &__content {
    max-width: 760px;
    width: 100%;
    order: 1;
    margin-bottom: 72px;

    @media screen and (min-width: 944px) {
      order: 0;
    }
  }

  &__department {
    padding: 72px 24px 48px;
    border-bottom: 1px solid #e6f0fa;
    box-sizing: content-box;
    margin: 0 auto;

    @media screen and (min-width: 576px) {
      padding: 72px 0 24px;
    }

    @media screen and (min-width: 944px) {
      padding-top: 48px;
    }
  }

  &__bar-container {
    width: 100%;
    overflow: hidden;

    @media screen and (min-width: 944px) {
      width: 352px;
      margin-left: 48px;
      overflow: hidden;
    }
  }

  &__bar-nav {
    width: 100%;
    height: 72px;
    padding: 24px;
    position: absolute; // delete
    position: relative; // coordsY = 360px change "position: fixed"
    top: 0;
    left: 0;
    box-shadow: 0 4px 6px rgb(155, 194, 229);
    background: #fff;
    overflow-x: auto;
    display: inline-flex;
    transition: box-shadow 0.3s;

    // management__bar-nav_fixed
    &_fixed {
      position: fixed;
    }

    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
      background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
      border-radius: 9em;
    }

    @media screen and (min-width: 944px) {
      box-shadow: none;
      position: fixed; // delete
      position: relative; // coordsY = 360px   style="position: fixed"
      top: 0;
      margin-top: 48px;
      left: inherit;
      display: block;
      padding: 0 0 0 48px;
      height: auto;
      width: auto;
      overflow: auto;
    }
  }

  &__bar-icon {
    width: 24px;
    height: 24px;
    transform: rotate(0.75turn);
    display: none;
    position: absolute;
    top: 0px;
    left: 0;
    transition: top 0.3s;

    @media screen and (min-width: 944px) {
      display: block;
    }
  }

  &__bar-link {
    cursor: pointer;
    white-space: nowrap;
    line-height: 24px;
    font-size: 16px;
    color: #50287d;
    transition: color 0.3s;
    outline: none;
    text-decoration: none;
    display: inline;
    margin-right: 24px;
    margin-bottom: 0;

    // management__bar-link_actived
    &_actived {
      color: #28323c;
      transition: color 0.3s;
    }

    @media screen and (min-width: 944px) {
      white-space: normal;
      display: block;
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
} // management
</style>
