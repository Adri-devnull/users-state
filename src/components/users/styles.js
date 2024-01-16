import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUsers = styled.div`
	display: flex;
	align-items: center;
	width: 420px;
	justify-content: space-between;
	padding: 10px 20px;
	border-radius: 10px;
	box-shadow: 2px 2px 10px grey;
`;

const StyledInfoUser = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
`;

const StyledImg = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
`;

const StyledName = styled.h2`
	font-size: 1.1em;
	margin: 0;
`;

const StyledUsername = styled.p`
	font-size: 0.8em;
	margin: 0;
`;

const StyledStatus = styled.span`
	color: ${({ active }) => (active ? 'green' : 'red')};
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	background-color: #d3d3d3;
	color: #000;
	padding: 2px;
	border-radius: 2px;
	border: 1px solid #000;
	font-size: 0.9em;
`;
export {
	StyledUsers,
	StyledInfoUser,
	StyledImg,
	StyledName,
	StyledUsername,
	StyledStatus,
	StyledLink
};
