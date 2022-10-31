<template>
  <div class="notes">
		<AddEditNote v-model.trim="newNote" ref="addEditNoteRef">
			<template v-slot:buttons>
				<button class="button is-link " @click="addNote" :disabled="!newNote">Add New</button>
			</template>
		</AddEditNote>

    <NoteCard v-for="note in storeNotes.notes" :key="note.id" :note="note"/>
		<Pagination/>
  </div>
</template>

<script setup>
/*
	Imports
*/
	import NoteCard from "@/components/Notes/NoteCard.vue";
	import Pagination from "@/components/Notes/Pagination.vue";
	import AddEditNote from "@/components/Notes/AddEditNote.vue";

	
	import { ref } from "@vue/reactivity";
	import { nextTick } from "@vue/runtime-core";
	import { useNoteStore } from "@/stores/storeNotes";
	import { useWatchChars } from "@/use/useWatchChars";


/*
	Uses
*/
	const storeNotes = useNoteStore()
/*
	Notes
*/

	const newNote = ref('')

	const addEditNoteRef = ref(null)
/*
	Methods
*/
	const addNote = ()  => {

		storeNotes.addNote(newNote.value)

		nextTick(() => {
			newNote.value = ''
			addEditNoteRef.value.focusTextarea()
		})
	}

	/*const deleteNote = (idNote) => {
		notes.value = notes.value.filter((x) => x.id != idNote);
	}*/

/*
	Watchers
*/
	useWatchChars(newNote)
</script>

<style scoped></style>
