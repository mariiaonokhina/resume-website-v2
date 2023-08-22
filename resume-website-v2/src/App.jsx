import { useEffect } from 'react';
import HomeContent from './HomeContent';
import RotatingNav from './RotatingNav';
import { useIsNavOpen } from './Context';

function App() {
	useEffect(() => {
		document.title = "Mariia's Website";
	}, []);

	const { isNavOpen, setIsNavOpen } = useIsNavOpen();

	return (
		<div className='App-container'>
			<div id='App' className={isNavOpen? 'show-nav': ''}>
				<HomeContent />
			</div>
			<RotatingNav />
		</div>
	)
}

export default App;