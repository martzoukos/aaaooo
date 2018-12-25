import Letter from '../components/letter';

class Page extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	audioState: true
    };
  }

  toggleAudio = (event) => {
  	this.setState({
	  	audioState: event.target.checked
	  });
  }

	render() {
		return (
			<div className="container">
		  	<Letter 
		  		value="•"
		  		audioIsAllowed={this.state.audioState}/>
		  	<div className="audio-control">
					<input 
						id="toggle-audio"
						type="checkbox"
						defaultChecked={this.state.audioState}
						onChange={this.toggleAudio}  />
			  	<label htmlFor="toggle-audio">Play audio</label>
			  </div>
			  <footer className="footer">
			  	Created by <a href="https://twitter.com/martzoukos">@martzoukos</a>
			  </footer>
			  <style jsx>{`
			  	.container {
		  			font-family: "Comic Sans MS", cursive, sans-serif;
		  			color: #ff5994;
			  	}

			  	a:link,
			  	a:visited {
			  		color: #ff5994;
			  	}
			  	a:hover,
			  	a:focus {
			  		background-color: #ff5994;
			  		color: #edff8f;
			  	}

			  	.footer {
			  		position: absolute;
			  		bottom: 1em;
			  		right: 1em;
			  	}

					.audio-control {
						position: absolute;
					}
				`}</style>
		  </div>
		)
	}
}

export default Page
