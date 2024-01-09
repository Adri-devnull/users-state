import { useState } from 'react';
import { USERS } from '../../constants/users';
import Users from '../users/Users';
import { StyledContainerList, StyledList, StyledUserList } from './styles';

const List = () => {
	const [filteredUsers, setFilteredUsers] = useState(USERS);

	const filteredByName = event => {
		const letters = event.target.value;
		const names = USERS.filter(user => user.name.startsWith(letters));
		console.log(letters);
		console.log(names);
	};

	return (
		<StyledList>
			<h1>Listado de usuarios</h1>
			<StyledContainerList>
				<input type='text' onChange={event => filteredByName(event)} />
				<div>
					<label htmlFor='active'>Solo activos</label>
					<input
						type='checkbox'
						id='active'
						onChange={event =>
							showActiveorInactive(event, filteredUsers, setFilteredUsers)
						}
					/>
				</div>
				<select>
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

const showActiveorInactive = (event, filteredUsers, setFilteredUsers) => {
	if (event.target.checked) {
		const onlyActiveUsers = filteredUsers.filter(user => user.active);
		setFilteredUsers(onlyActiveUsers);
	} else {
		setFilteredUsers(USERS);
	}
};
export default List;
