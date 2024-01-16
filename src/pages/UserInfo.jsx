import { useParams } from 'react-router-dom';
import { USERS } from '../constants/users';
import { StyledContainer } from './styles';

const UserInfo = () => {
	const { userId } = useParams();
	const currentUser = USERS.find(user => user.userId === userId);
	return (
		<div>
			<button>Back To Users</button>
			<h1>Hi! My name is {currentUser.name}</h1>
			<img src={currentUser.profileImage} alt='' />
			<p>Im {currentUser.age}</p>
			<p>My username is {currentUser.username}</p>
			<p>You can contact me in {currentUser.email}</p>
			<StyledContainer>
				<span>My Address is:</span>
				<span>{currentUser.address.street}</span>
				<span>{currentUser.address.city}</span>
				<span>{currentUser.address.zipCode}</span>
			</StyledContainer>
			<p>You can call me at {currentUser.phone}</p>
		</div>
	);
};

export default UserInfo;
