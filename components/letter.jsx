class Letter extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
    	letterValue: this.props.value
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
		  	letterValue: event.key
		  });	
  	}
	}

	render() {
		return (
			<div className="letter">
				<label htmlFor="letter__input" className="letter__character" >
		  		{this.state.letterValue}
		  	</label>
		  	<input 
		  		autoFocus 
		  		readOnly
		  		id="letter__input" 
		  		onKeyDown={this.updateLetterValue} 
		  		value={this.state.letterValue}
		  		/>
		  	<style jsx>{`
		  		.letter__character {
		  			background-color: #edff8f;
		  			color: #ff5994;
		  			font-family: "Comic Sans MS", cursive, sans-serif;
		  			position: absolute;
		  			top: 0;
		  			left: 0;
		  			right: 0;
		  			bottom: 0;
		  			font-size: 80vh;
		  			line-height: 80vh;
		  			text-align: center;
		  		}

					#letter__input { /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
			  		position: absolute !important;
				    height: 1px; width: 1px;
				    overflow: hidden;
				    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
				    clip: rect(1px, 1px, 1px, 1px);
				  }
		  	`}</style>
		  </div>
	  )
	}
}

export default Letter
