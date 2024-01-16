import { Route, Routes } from 'react-router-dom';
import UserInfo from '../pages/UserInfo';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<UserInfo />} />
			<Route path='/:userId' element={<UserInfo />} />
		</Routes>
	);
};

export default Router;
