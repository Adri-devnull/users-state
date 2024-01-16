import { Route, Routes } from 'react-router-dom';
import UserInfo from '../pages/UserInfo';
import List from '../components/list/List';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<List />} />
			<Route path='/:userId' element={<UserInfo />} />
		</Routes>
	);
};

export default Router;
