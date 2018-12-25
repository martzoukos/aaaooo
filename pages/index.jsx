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
			  <style jsx>{`
			  	.container {
		  			font-family: "Comic Sans MS", cursive, sans-serif;
		  			color: #ff5994;
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
