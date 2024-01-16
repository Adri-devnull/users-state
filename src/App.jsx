import { BrowserRouter } from 'react-router-dom';
import List from './components/list/List';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<List />
			<Router />
		</BrowserRouter>
	);
};

export default App;
