import { useState } from 'react';
import { USERS } from '../../constants/users';
import Users from '../users/Users';
import { StyledContainerList, StyledList, StyledUserList } from './styles';

const List = () => {
	const [showOnlyActive, setShowOnlyActive] = useState(false);

	const handleCheckboxChange = event => {
		if (event.target.checked) {
			setShowOnlyActive(true);
		} else {
			setShowOnlyActive(false);
		}
	};

	let filteredUsers = USERS;
	if (showOnlyActive) {
		filteredUsers = USERS.filter(user => user.active);
	}

	return (
		<StyledList>
			<h1>Listado de usuarios</h1>
			<StyledContainerList>
				<input type='text' />
				<div>
					<label htmlFor='active'>Solo activos</label>
					<input
						type='checkbox'
						id='active'
						checked={showOnlyActive}
						onChange={handleCheckboxChange}
					/>
				</div>
				<select>
					<option value='0'>Por Defecto</option>
					<option value='1'>Por Nombre</option>
				</select>
			</StyledContainerList>
			<StyledUserList>
				{filteredUsers.map(user => (
					<Users
						key={user.userId}
						name={user.name}
						username={user.username}
						status={user.status}
						profileImage={user.profileImage}
						color={user.color}
					/>
				))}
			</StyledUserList>
		</StyledList>
	);
};

export default List;
