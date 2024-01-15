import { BrowserRouter } from 'react-router-dom';
import List from './components/list/List';

const App = () => {
	return (
		<BrowserRouter>
			<List />
		</BrowserRouter>
	);
};

export default App;
