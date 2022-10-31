<template>
  <div class="p-4 mb-4" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea class="textarea" maxlength="255" ref="textareaRef" v-model="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', modelValue)" v-autofocus/>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"/>
      </div>
    </div>
  </div>
</template>

<script setup>

/*
  Imports
*/
  import { ref } from "@vue/reactivity"
  import { vAutofocus } from "@/directives/vAutofocus"

/* 
  Emits
*/
  const emit = defineEmits(['update:modelValue'])
/* 
  Props
*/
  const props = defineProps({
    modelValue:{
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'success'
    },
    placeholder: {
      type: String,
      default: 'New Note here...'
    },
    label: String
  })

/*
  Datas
*/
  const textareaRef = ref(null)

/*
  Focus Textarea
*/

  const focusTextarea = () => {
    textareaRef.value.focus()
  }

  defineExpose({
    focusTextarea,
  })

</script>