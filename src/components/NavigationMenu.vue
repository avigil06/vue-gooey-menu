i<template>
  <nav :class="{ 'navigation-menu': true, secondary }">
    <router-link :to="{ name: 'home' }" class="navigation-link" >
      <font-awesome-icon icon="home" class="navigation-icon" />
    </router-link>
    <router-link :to="{ path: 'none' }" class="navigation-link" >
      <font-awesome-icon icon="list" class="navigation-icon" />
    </router-link>
    <router-link :to="{ name: 'about' }" class="navigation-link" >
      <font-awesome-icon icon="envelope" class="navigation-icon" />
    </router-link>
    <router-link :to="{ path: 'none' }" class="navigation-link" >
      <font-awesome-icon icon="user" class="navigation-icon" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
  props: {
    secondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.navigation-menu {

  .navigation-link {
    position: absolute;
    top: 15px;
    transition: all 300ms;
    color: #D3D9E8;

    &.router-link-exact-active {
      color: #FF3366;
    }

    &:nth-of-type(1) {
      left: 20px;
    }
    &:nth-of-type(2) {
      left: 100px;
    }
    &:nth-of-type(3) {
      right: 100px;
    }
    &:nth-of-type(4) {
      right: 20px;
    }

    .navigation-icon {
      height: 25px;
      width: 25px;
    }
  }

  &.secondary {
    .navigation-link {
      &:nth-of-type(1) {
        left: 10px;
      }
      &:nth-of-type(2) {
        left: 75px;
      }
      &:nth-of-type(3) {
        right: 75px;
      }
      &:nth-of-type(4) {
        right: 10px;
      }
    }
  }
}
</style>
