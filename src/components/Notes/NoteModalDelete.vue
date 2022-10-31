<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div class="modal-card" ref="deleteModalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note ?</p>
        <button class="delete" aria-label="close"  @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you ure You want to this note ?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(note.id)">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>

/*
  Imports
*/
  import { ref } from '@vue/reactivity'
  import { onMounted, onUnmounted } from '@vue/runtime-core'
  import { onClickOutside } from '@vueuse/core'
  import { useNoteStore } from "@/stores/storeNotes";
/*
  Props
*/
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    note: Object
  })

/*
  Emits
*/
  const emit = defineEmits(['update:modelValue'])

/*
  Uses
*/
  const storeNotes = useNoteStore()
 
/*
  Methods
*/

  const closeModal = () => {
    emit('update:modelValue', false)
  }


/*
  outSideClose
*/
  const deleteModalRef = ref(null)

  onClickOutside(deleteModalRef, (event) => {
   closeModal() 
  })

/*
  LifeCycles
*/

  //Get key Control
  const handleKeyboard = e => {
    //console.log('close it');
    e.key === 'Escape' ? closeModal() : false
  }

  onMounted(() => {
    document.addEventListener('keyup',  handleKeyboard)
  })

  onUnmounted(() => {
    document.removeEventListener('keyup',  handleKeyboard)
  })
</script>