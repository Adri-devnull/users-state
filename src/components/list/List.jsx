import { useState } from 'react';
import { USERS } from '../../constants/users';
import Users from '../users/Users';
import { StyledContainerList, StyledList, StyledUserList } from './styles';

const List = () => {
	const [showOnlyActive, setShowOnlyActive] = useState(false);

	const showActiveorInactive = event => {
		if (event.target.checked) {
			setShowOnlyActive(true);
		} else {
			setShowOnlyActive(false);
		}
	};

	const showUsersForName = event => {
		// let word = event.target.value;
	};

	let filteredUsers = USERS;
	if (showOnlyActive) {
		filteredUsers = USERS.filter(user => user.active);
	}

	return (
		<StyledList>
			<h1>Listado de usuarios</h1>
			<StyledContainerList>
				<input type='text' onChange={showUsersForName} />
				<div>
					<label htmlFor='active'>Solo activos</label>
					<input
						type='checkbox'
						id='active'
						checked={showOnlyActive}
						onChange={showActiveorInactive}
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

export default List;
