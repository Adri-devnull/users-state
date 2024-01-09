import { useState } from 'react';
import { USERS } from '../../constants/users';
import Users from '../users/Users';
import { StyledContainerList, StyledList, StyledUserList } from './styles';

const List = () => {
	const [active, setActive] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [forName, setForName] = useState(0);

	let filteredUsers = filterActiveUsers(USERS, active);
	filteredUsers = filterForName(filteredUsers, inputValue);
	filteredUsers = filterAlphabetically(filteredUsers, forName);

	return (
		<StyledList>
			<h1>Listado de usuarios</h1>
			<StyledContainerList>
				<input
					type='text'
					onInput={event => handleinputValue(event, setInputValue)}
				/>
				<div>
					<label htmlFor='active'>Solo activos</label>
					<input
						type='checkbox'
						id='active'
						onChange={() => handleChange(active, setActive)}
					/>
				</div>
				<select onChange={event => handleForNameSearch(event, setForName)}>
					<option value='0'>Por Defecto</option>
					<option value='1'>Por Nombre</option>
				</select>
			</StyledContainerList>
			<StyledUserList>
				{filteredUsers.map(user => (
					<Users key={user.userId} {...user} />
				))}
			</StyledUserList>
		</StyledList>
	);
};

const handleChange = (active, setActive) => {
	setActive(!active);
};

const filterActiveUsers = (users, active) => {
	if (active) {
		return users.filter(user => user.active);
	}
	return [...users];
};

const handleinputValue = (event, setInputValue) => {
	const search = event.target.value;
	setInputValue(search);
};

const filterForName = (users, inputValue) => {
	if (!inputValue) return [...users];
	return users.filter(user =>
		user.name.toLowerCase().includes(inputValue.toLowerCase())
	);
};

const handleForNameSearch = (event, setForName) => {
	const value = event.target.value;
	setForName(value);
};

const filterAlphabetically = (users, forName) => {
	const sortedUsers = [...users];
	const formatedValue = Number(forName);
	if (formatedValue === 0) return sortedUsers;
	return sortedUsers.sort((a, b) => {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
		return 0;
	});
};

export default List;
