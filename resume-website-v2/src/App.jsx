import { useEffect } from 'react';
import NavCircle from './NavCircle';
import MainContent from './MainContent';
import RotatingNav from './RotatingNav';
import { useState } from 'react';

function App() {
	useEffect(() => {
		document.title = "Mariia's Website";

		const closeNavigation = () => {
			setIsNavOpen(false);
		}

		const openNavigation = () => {
			setIsNavOpen(true);
		}
		const closeNavigationBtn = document.getElementById('close-nav-btn');
		const openNavigationBtn = document.getElementById('open-nav-btn');

		openNavigationBtn.addEventListener("click", openNavigation);
		closeNavigationBtn.addEventListener("click", closeNavigation);
	}, []);

	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className='App-container'>
			<div className="circle-container">
            	<div className="circle" id={isNavOpen? 'rotate-circle': ''}>
                	<button id="close-nav-btn">
                    	<img className="close-nav-img" src='./x.svg'></img>
                	</button>

                	<button id="open-nav-btn">
                    	<img className='bars-img' src='./bars-solid.svg'></img>
                	</button>
            	</div>
        	</div>

			<div id='App' className={isNavOpen? 'show-nav': ''}>
				<MainContent />
			</div>
			<RotatingNav />
		</div>
	)
}

export default App;