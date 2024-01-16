import {
	StyledImg,
	StyledInfoUser,
	StyledLink,
	StyledName,
	StyledStatus,
	StyledUsername,
	StyledUsers
} from './styles';

const Users = ({ userId, name, username, status, profileImage, active }) => {
	return (
		<StyledUsers>
			<StyledInfoUser>
				<StyledImg src={profileImage} alt='' />
				<div>
					<StyledName>{name}</StyledName>
					<StyledUsername>@{username}</StyledUsername>
				</div>
			</StyledInfoUser>
			<StyledStatus $active={active}>{status}</StyledStatus>
			<StyledLink to={`/${userId}`}>Ver detalles</StyledLink>
		</StyledUsers>
	);
};

export default Users;
