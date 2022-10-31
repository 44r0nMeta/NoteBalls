<template>
  <div class="card mb-4">

    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }} {{ characterLength > 1? 'characters':'character' }}</small>
        </div>
        <!--time datetime="2016-1-1">11:09 PM - 1 Jan 2016</!time-->
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit/${note.id}`"  class="card-footer-item">Edit</RouterLink>
      <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
    </footer>

    <NoteModalDelete :note="note" v-model="modals.deleteNote" v-if="modals.deleteNote"/>

  </div>
</template>

<script setup>
/*
  Imports 
*/
  import { computed, reactive } from "@vue/runtime-core"
  import { useNoteStore } from "@/stores/storeNotes"
  import NoteModalDelete from "@/components/Notes/NoteModalDelete.vue"
/*
  Uses
*/
  const storeNotes = useNoteStore()
/*
  Props
*/


  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  })

/*
  Computed
*/

  const characterLength = computed(()=> {
    return props.note.content.length
  }) 


/*
  Modals
*/

  const modals = reactive({
    deleteNote: false,
  })

</script>