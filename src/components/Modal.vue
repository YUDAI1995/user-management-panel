<template>
  <div class="modalWrapper" @click.prevent="clickHandler">
    <div class="content" @click.stop="">
      <slot></slot>
      <button class="closeBtn" @click.prevent="clickHandler">Close</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  methods: {
    clickHandler() {
      this.$emit('close-fromModal');
    },
  },
});
</script>

<style lang="scss" scoped>
.modalWrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #6d6d6d4b;

  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    width: 600px;
    max-width: 100%;
    max-height: calc(100% - 80px);
    margin: 0 10px;
    background-color: #ffffff;
    padding: 20px 10px;
    border-radius: 6px;
    overflow: scroll;

    .closeBtn {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
