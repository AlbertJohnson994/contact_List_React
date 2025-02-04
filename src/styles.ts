import styled from 'styled-components'

export const Container = styled.div`
	width: 400px;
	margin: 20px auto;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	//background-color: #000;
`

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const Input = styled.input`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 5px;
`

export const Button = styled.button`
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: white;
	cursor: pointer;
	&:hover {
		background-color: #0056b3;
	}
`

export const ContactList = styled.ul`
	list-style: none;
	padding: 0;
`

export const ContactItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border-bottom: 1px solid #ccc;
`
