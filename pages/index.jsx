import {withRouter} from 'next/router'
import Letter from '../components/letter';
import Head from 'next/head';

class Page extends React.Component {
	constructor(props) {
    super(props);
    this.bgColor = props.router.query.bgColor || "#edff8f";
    this.textColor = props.router.query.textColor || "#ff5994";
    this.fontFamily = props.router.query.fontFamily || '"Comic Sans MS", sans-serif';
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
				<Head>
		      <title>aaaooo.in - type something</title>
					<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131389191-1"></script>
					<script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-131389191-1');` }} />
		    </Head>
		  	<Letter 
		  		value="A"
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
			  	<a href="https://github.com/martzoukos/aaaooo">Instructions</a>
			  </footer>
			  <style jsx>{`
			  	.container {
			  		overflow: hidden;
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
			  		background-color: ${this.textColor};
			  		color: ${this.bgColor};
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
