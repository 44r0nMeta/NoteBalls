<template>
    <div class="stats">
        <table class="table is-fullwidth">
					<thead>
						<tr>
							<th>Stat</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Number of Notes</td>
							<td>{{ notesNumber }}</td>
						</tr>
						<tr>
							<td>Number of Character (for all notes)</td>
							<td>{{ charactersNumber }}</td>
						</tr>
					</tbody>
				</table>
				<input class="input" type="text" placeholder="Love you Noteballs ?" v-autofocus>
    </div>
</template>

<script setup>
/*
	Imports
*/
	import { useNoteStore } from '@/stores/storeNotes'
	import { computed } from '@vue/runtime-core';
	import { vAutofocus } from "@/directives/vAutofocus";
/*
	Uses
*/
	const storeNotes = useNoteStore()

/*
	Computed
*/

	const notesNumber = computed(() => {
		return (storeNotes.getAllNotes).length
	})

	const charactersNumber = computed(() => {
		return storeNotes.getAllNotes.reduce((total, note) => (total = total + note.content.length),0)
	})

</script>

<style scoped>

</style>