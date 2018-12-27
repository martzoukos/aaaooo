class Letter extends React.Component {
	 constructor(props) {
    super(props);
    this.key = 0;
    this.state = {
    	letterValue: this.props.value,
    	soundFile: `./static/alphabet/${this.props.value.toLowerCase()}.wav`
    };
  }

  updateLetterValue = (event) => {
  	if (
  		// https://keycode.info/
  		// This seemingly random list of keys representes alphanumeric and special characters. 
  		(event.keyCode >= 48 && event.keyCode <= 90)
  	  || (event.keyCode >= 96 && event.keyCode <= 111)
  	  || (event.keyCode >= 160 && event.keyCode <= 165)
  	  || (event.keyCode >= 186 && event.keyCode <= 223))
  	{
			this.setState({
		  	letterValue: event.key,
		  	soundFile: `./static/alphabet/${event.key.toLowerCase()}.wav`
		  });	
  	}
	}

	render() {
		// Rerender the Letter component to refire the animation on each keystroke.
		// I know, yuk.
		++this.key;
		return (
			<div className="letter">
				<label 
					htmlFor="letter__input"
					className="letter__character" 
		  		key={this.key} >
		  		{this.state.letterValue}
		  	</label>
		  	<input 
		  		autoFocus 
		  		id="letter__input" 
		  		className="visuallyhidden letter__input"
		  		onKeyDown={this.updateLetterValue} 
		  		type="text"
		  		/>
		  	{this.props.audioIsAllowed ? (
		  		<audio src={this.state.soundFile} autoPlay/>
		  	) : (
		  		false
		  	)}
		  	<style jsx>{`
		  		.visuallyhidden {
						/* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
			  		position: absolute !important;
				    height: 1px; width: 1px;
				    overflow: hidden;
				    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
				    clip: rect(1px, 1px, 1px, 1px);
		  		}

		  		@keyframes reset {
					  from {filter: brightness(60%);}
					  to {color: ${this.textColor};}
					}

		  		.letter__character {
					  animation-name: reset;
					  animation-duration: .5s;

		  			position: absolute;
		  			top: 0;
		  			left: 0;
		  			right: 0;
		  			bottom: 0;
		  			font-size: 80vh;
		  			line-height: 80vh;
		  			text-align: center;
					}

					.letter__input {
						/* Disable zoom in iOS when keyboard is shown */
						font-size: 80vh;
					}
		  	`}</style>
		  </div>
	  )
	}
}

export default Letter
