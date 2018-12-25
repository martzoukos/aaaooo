import {withRouter} from 'next/router'
import Letter from '../components/letter';

class Page extends React.Component {
	constructor(props) {
    super(props);
    this.bgColor = props.router.query.bgColor || "#edff8f";
    this.textColor = props.router.query.textColor || "#ff5994";
    this.fontFamily = props.router.query.fontFamily || '"Comic Sans MS", cursive, sans-serif';
    this.fontWeight = props.router.query.fontWeight || "400";
    this.fontStyle = props.router.query.fontStyle || "normal";
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
		  			position: absolute;
		  			top: 0;
		  			left: 0;
		  			right: 0;
		  			bottom: 0;
			  		background-color: ${this.bgColor};
		  			font-family: ${this.fontFamily};
		  			font-weight: ${this.fontWeight};
		  			font-style: ${this.fontStyle};
		  			color: ${this.textColor};
			  	}

			  	a:link,
			  	a:visited {
			  		color: ${this.textColor};
			  	}
			  	a:hover,
			  	a:focus {
			  		background-color: ${this.bgColor};
			  		color: #edff8f;
			  	}

			  	.footer {
			  		padding: .5em;
			  		position: absolute;
			  		bottom: 0;
			  		right: 0;
			  	}

					.audio-control {
			  		padding: .5em;
						position: absolute;
			  		top: 0;
			  		left: 0;
					}
				`}</style>
		  </div>
		)
	}
}

export default withRouter(Page)
