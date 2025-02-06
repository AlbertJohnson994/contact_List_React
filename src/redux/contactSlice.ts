import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contact {
	id: string
	name: string
	email: string
	phone: string
}

const initialState: Contact[] = []

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
			state.push({ id: Date.now().toString(), ...action.payload })
		},
		removeContact: (state, action: PayloadAction<string>) => {
			return state.filter((contact) => contact.id !== action.payload)
		},
		editContact: (state, action: PayloadAction<Contact>) => {
			const index = state.findIndex(
				(contact) => contact.id === action.payload.id
			)
			if (index !== -1) state[index] = action.payload
		}
	}
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer
