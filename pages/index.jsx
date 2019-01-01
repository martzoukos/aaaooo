import queryString  from 'query-string';
import Letter from '../components/letter';
import Head from 'next/head';

class Page extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	audioState: true,
    	bgColor: "#edff8f",
    	textColor: "#ff5994",
    	fontFamily: '"Comic Sans MS", sans-serif',
    	fontWeight: "400",
    	fontStyle: "normal"
    };
  }

  componentDidMount = () => {
    const queryStrings = queryString.parse(location.search);
    if (typeof queryStrings.bgColor !== "undefined") {
    	this.setState({
    		bgColor: queryStrings.bgColor
    	});
    }
    if (typeof queryStrings.textColor !== "undefined") {
    	this.setState({
    		textColor: queryStrings.textColor
    	});
    }
    if (typeof queryStrings.fontFamily !== "undefined") {
    	this.setState({
    		fontFamily: queryStrings.fontFamily
    	});
    }
    if (typeof queryStrings.fontWeight !== "undefined") {
    	this.setState({
    		fontWeight: queryStrings.fontWeight
    	});
    }
    if (typeof queryStrings.fontStyle !== "undefined") {
    	this.setState({
    		fontStyle: queryStrings.fontStyle
    	});
    }
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
		      <meta property="og:title" content="aaaooo.in - type something">
					<meta property="og:description" content="A page where your toddler can play with your keyboard and type random letters.">
					<meta property="og:image" content="https://aaaooo.in/static/app-screenshot.png">
					<meta property="og:url" content="http://aaaooo.in">
					<meta name="twitter:card" content="summary_large_image">
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
			  		background-color: ${this.state.bgColor};
		  			font-family: ${this.state.fontFamily};
		  			font-weight: ${this.state.fontWeight};
		  			font-style: ${this.state.fontStyle};
		  			color: ${this.state.textColor};
			  	}

			  	a:link,
			  	a:visited {
			  		color: ${this.state.textColor};
			  	}
			  	a:hover,
			  	a:focus {
			  		background-color: ${this.state.textColor};
			  		color: ${this.state.bgColor};
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

export default Page
