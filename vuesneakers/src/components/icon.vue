<template>
  <use class="icon" v-bind:xlink:href="`#` + iconName" />
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
    },
  },
  name: `icon`,
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.icon {
  padding: 0;
  width: 32px;
  height: 32px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  /* 
    Код не должен выглядеть как сжатый кусок говна,
    проставляй переносы строки где это нужно
  */
  &:hover {
    background-color: #fff;
  }
  &:active {
    background-color: black;
    border-color: black;
  }
}
</style>
