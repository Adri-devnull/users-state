import { USERS } from '../../constants/users';
import Users from '../users/Users';
import { StyledContainerList, StyledList, StyledUserList } from './styles';

const List = () => {
	return (
		<StyledList>
			<h1>Listado de usuarios</h1>
			<StyledContainerList>
				<input type='text' />
				<div>
					<label htmlFor='active'>Solo activos</label>
					<input type='checkbox' id='active' />
				</div>
				<select>
					<option value='0'>Por Defecto</option>
					<option value='1'>Por Nombre</option>
				</select>
			</StyledContainerList>
			<StyledUserList>
				{USERS.map(user => (
					<Users
						key={user.userId}
						name={user.name}
						username={user.username}
						status={user.status}
						profileImage={user.profileImage}
					/>
				))}
			</StyledUserList>
		</StyledList>
	);
};

export default List;
