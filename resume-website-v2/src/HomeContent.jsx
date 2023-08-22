import React from "react";

const HomeContent = () => {
    return (
        <div className='MainContent'>
        	<h1>Hey, I am Mariia!</h1>
        	<p>An enthusiastic software engineer and web developer.</p>
        	<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'/>

        	<div className="Socials">
          		<a href='https://github.com/mariiaonokhina'><img className='social-icon' src='./github.png'></img></a>
          		<a href='https://www.linkedin.com/in/mariia-onokhina/'><img className='social-icon' src='./linkedin-logo.png'></img></a>
          		<a href='https://www.instagram.com/fullstack_guru/'><img className='social-icon' src='./instagram.png'></img></a>
        	</div>
      	</div>
    )
}

export default HomeContent;