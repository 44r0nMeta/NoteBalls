import { defineStore } from 'pinia'

export const useNoteStore = defineStore({
  id: 'storeNotes',
  state: () => ({
    notes: [
      {
        id: '1652805585942',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga minima cum dolor libero pariatur natus magni impedit molestias non.'
      },
      {
        id: '1652805585944',
        content: 'this IS shot Notes. LOL ;)'
      },
    ]
  }),

  actions: {
    addNote(newNoteContent) {

      let uuid = new Date().getTime().toString()
      let note = 	{
          id: uuid,
          content: newNoteContent
      }
      this.notes.unshift(note)
  
    },

    deleteNote(idNote){
      this.notes = this.notes.filter((x) => x.id != idNote);
    },

    updateNote(note) {
      //Update using getter
      (this.getNote(note.id)).content = note.content
    },

  },

  getters: {
    //state to get data
    getNote: (state) =>  {
      return (id) => {
        return state.notes.find((note) => { return note.id === id })
      }
    },

    getAllNotes () {
      return this.notes
    },

  }
})