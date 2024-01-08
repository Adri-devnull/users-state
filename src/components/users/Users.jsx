import {
	StyledImg,
	StyledInfoUser,
	StyledName,
	StyledStatus,
	StyledUsername,
	StyledUsers
} from './styles';

const Users = ({ name, username, status, profileImage, color }) => {
	return (
		<StyledUsers>
			<StyledInfoUser>
				<StyledImg src={profileImage} alt='' />
				<div>
					<StyledName>{name}</StyledName>
					<StyledUsername>@{username}</StyledUsername>
				</div>
			</StyledInfoUser>
			<StyledStatus color={color}>{status}</StyledStatus>
		</StyledUsers>
	);
};

export default Users;
