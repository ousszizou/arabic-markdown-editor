<script setup>
defineProps(["id", "checked"]);
</script>

<template>
  <div class="contents">
    <input type="checkbox" :id="id" :checked="checked" v-on="$listeners" />
    <label :for="id">Toggle</label>
  </div>
</template>

<style>
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 26px;
  background: var(--color-theme-secondary);
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 5px;
  width: 20px;
  height: 20px;
  background: var(--color-text-base);
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #3b82f6;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 28px;
}
</style>
