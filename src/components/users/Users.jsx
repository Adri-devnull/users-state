import {
	StyledImg,
	StyledInfoUser,
	StyledName,
	StyledUsername,
	StyledUsers
} from './styles';

const Users = ({ name, username, status, profileImage }) => {
	return (
		<StyledUsers>
			<StyledInfoUser>
				<StyledImg src={profileImage} alt='' />
				<div>
					<StyledName>{name}</StyledName>
					<StyledUsername>@{username}</StyledUsername>
				</div>
			</StyledInfoUser>
			<span>{status}</span>
		</StyledUsers>
	);
};

export default Users;
