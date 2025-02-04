import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addContact, removeContact, editContact } from './redux/contactSlice'
import { RootState } from './redux/store'
import {
	Button,
	ContactForm,
	ContactItem,
	ContactList,
	Container,
	Input
} from './styles'

const ContactApp: React.FC = () => {
	const contacts = useSelector((state: RootState) => state.contacts)
	const dispatch = useDispatch()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [editingId, setEditingId] = useState<string | null>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (editingId !== null) {
			dispatch(editContact({ id: editingId, name, email, phone }))
			setEditingId(null)
		} else {
			dispatch(addContact({ name, email, phone }))
		}
		setName('')
		setEmail('')
		setPhone('')
	}

	const handleEdit = (contact: {
		id: string
		name: string
		email: string
		phone: string
	}) => {
		setEditingId(contact.id)
		setName(contact.name)
		setEmail(contact.email)
		setPhone(contact.phone)
	}

	return (
		<Container>
			<h2>Lista de Contatos</h2>
			<ContactForm onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="Nome completo"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<Input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Input
					type="tel"
					placeholder="Telefone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					required
				/>
				<Button type="submit">{editingId ? 'Editar' : 'Adicionar'}</Button>
			</ContactForm>
			<ContactList>
				{contacts.map((contact) => (
					<ContactItem key={contact.id}>
						<span>
							{contact.name} - {contact.email} - {contact.phone}
						</span>
						<div>
							<Button onClick={() => handleEdit(contact)}>Editar</Button>
							<Button onClick={() => dispatch(removeContact(contact.id))}>
								Remover
							</Button>
						</div>
					</ContactItem>
				))}
			</ContactList>
		</Container>
	)
}

export default ContactApp
