<template>
  <section class="bottom-navigation">
    <svg
      class="bottom-navigation__svg"
      version="1.1"
      baseProfile="full"
      width="320"
      height="56"
      xmlns="http://www.w3.org/2000/svg">
      <path :d="this.flatPoints" fill="#fff">
        <animate
          ref="toFlat"
          attributeName="d"
          dur="300ms"
          begin="indefinite"
          :from="curvePoints"
          :to="flatPoints"
          fill="freeze" />
        <animate
          ref="toCurve"
          attributeName="d"
          dur="300ms"
          begin="indefinite"
          :from="flatPoints"
          :to="curvePoints"
          fill="freeze" />
      </path>
    </svg>
    <NavigationMenu class="nav-container" :secondary="toggled" />
    <transition name="appear">
      <button v-show="toggled" class="add-button">
        <transition name="appear-delay">
          <font-awesome-icon v-show="toggled" icon="plus" />
        </transition>
      </button>
    </transition>
  </section>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
  name: 'BottomNavigation',
  components: {
    NavigationMenu,
  },
  data() {
    return {
      flatPoints: [
        'M 136 0',
        'C 142 0 148.8 0 155.67 0',
        'C 165.14 0 174.74 0 182.52 0',
        'C 200.84 0 204.81 0 194.42 0',
        'C 204.5 0 217.04 0 229.97 0',
        'C 241.97 0 271.98 0 320 0',
        'L 320 56',
        'L 0 56',
        'L 0 0',
        'C 42.65 0 69.3 0 79.96 0',
        'C 93.03 0 105.8 0 116.66 0',
        'C 105.55 0 112 0 136 0',
        'Z',
      ].join(' '),
      curvePoints: [
        'M 136 24.04',
        'C 142 28.05 148.8 30.23 155.67 30.62',
        'C 165.14 31.15 174.74 28.26 182.52 22.02',
        'C 200.84 7.34 204.81 4.16 194.42 12.49',
        'C 204.5 4.41 217.04 0 229.97 0',
        'C 241.97 0 271.98 0 320 0',
        'L 320 56',
        'L 0 56',
        'L 0 0',
        'C 42.65 0 69.3 0 79.96 0',
        'C 93.03 0 105.8 3.87 116.66 11.13',
        'C 105.55 3.71 112 8.01 136 24.04',
        'Z',
      ].join(' '),
    };
  },
  computed: {
    toggled() {
      return this.$store.state.menuToggled;
    },
  },
  watch: {
    toggled() {
      return this.toggled ? this.toCurved() : this.toFlat();
    },
  },
  methods: {
    toCurved() {
      this.$refs.toCurve.beginElement();
    },
    toFlat() {
      this.$refs.toFlat.beginElement();
    },
  },
};
</script>

<style lang="scss">
.bottom-navigation {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 320px;
  height: 56px;
}

.bottom-navigation__svg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  filter: drop-shadow( 3px 0px 5px rgba(0, 0, 0, .25));
}

.nav-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.add-button {
  position: absolute;
  bottom: 35px;
  right: 133px;
  background-color: #FF3366;
  color: #fff;
  font-size: 24px;
  filter: drop-shadow( 3px 0px 5px rgba(0, 0, 0, .25));
  border: 0;
  border-radius: 50%;
  height: 56px;
  width: 56px;
}

.appear-enter-active,
.appear-leave-active,
.appear-delay-enter-active,
.appear-delay-leave-active {
  transform: scale(1);
  transition: transform 300ms;
}

.appear-enter-active,
.appear-delay-enter-active {
  transition-delay: 200ms;
}

.appear-enter,
.appear-leave-to,
.appear-delay-enter,
.appear-delay-leave {
  transform: scale(0);
}
</style>
