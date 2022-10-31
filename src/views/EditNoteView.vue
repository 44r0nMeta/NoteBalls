<template>
  <div class="edit-note">
    <AddEditNote v-model="note.content" bgColor="link" placeholder="Edit Note" label="Edit Note">
      <template v-slot:buttons>
        <button @click="$router.push('/')" class="button is-link is-light mr-2">Cancel</button>
        <button class="button is-link has-background-success" @click="saveNote" :disabled="!note.content">Save Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  Imports
*/
  import AddEditNote from "@/components/Notes/AddEditNote.vue";
  import { ref, reactive } from "@vue/reactivity";
  import { useNoteStore } from "@/stores/storeNotes";
  import { useRoute, useRouter } from "vue-router";
  import { nextTick } from "@vue/runtime-core";
  import { useWatchChars } from "@/use/useWatchChars";

/*
	Uses
*/
	const storeNotes = useNoteStore()
  const route = useRoute()
  const router = useRouter()
/*
  Notes
*/

  //const note = ref('')
  const note = reactive({
    id:'',
    content:''
  })
  note.content = storeNotes.getNote(route.params.id).content
  note.id = storeNotes.getNote(route.params.id).id

/*
  Methods
*/
  const saveNote = () => {
    storeNotes.updateNote(note)
    nextTick(() => {
      router.push('/')
    })
  }
  
  
  useWatchChars(() => note.content, 255) //() => Pour caster en une return value
</script>