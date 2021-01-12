

function About() {
    return (
        <div class="container intro">		
			<h1 class="bold">Hi!</h1>
			<h1>I'm <span class="bold">Joel Bystedt</span>, a design addicted, passionate, outside the box-thinker, ambitious, tech enthusiastic, and creative guy looking for a career.</h1>
			<h2>Feel free to contact me at <a href="mailto:joel.bystedt@gmail.com" class="email">joel.bystedt@gmail.com</a></h2>	
			<div class="toggle">
				<img id="sun" src="img/sun black.png" alt="light"></img>
				<input type="checkbox" id="switch" />
				<label for="switch">Toggle</label>
				<img id="moon" src="img/moon black.png" alt="dark"></img>
			</div>
		</div>
    );
}

export default About;