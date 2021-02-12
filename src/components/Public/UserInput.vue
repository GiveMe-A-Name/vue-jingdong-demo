<template>
  <div class="inputbox">
    <input
      class="inputbox__item"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInputChange"
    >
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  props: ['type', 'placeholder', 'modelValue'],
  setup(props, context) {
    const { emit } = context
    const handleInputChange = (e) => {
      emit('update:modelValue', e.target.value)
    }
    return {
      handleInputChange
    }
  }
}
</script>

<style lang="scss" scoped>
.inputbox {
  width: 2.95rem;
  height: 0.48rem;
  background-color: #f9f9f9;
  margin: 0 auto;
  text-align: left;
  box-sizing: border-box;
  padding: 0.12rem 0.16rem;
  border-radius: .06rem;
  &__item {
    width: 100%;
    font-size: 0.16rem;
    border: none;
    outline: none;
    background-color: inherit;
  }
}
</style>
