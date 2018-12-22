class Letter extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
    	letter: this.props.value
    };
  }

  updateLetter = (event) => {
  	console.log(event.keyCode);
  	if (
  		// https://keycode.info/
  		// This seemingly random list of keys representes alphanumeric and special characters. 
  		(event.keyCode >= 48 && event.keyCode <= 90)
  	  || (event.keyCode >= 96 && event.keyCode <= 111)
  	  || (event.keyCode >= 160 && event.keyCode <= 165)
  	  || (event.keyCode >= 186 && event.keyCode <= 223))
  	{
			this.setState({
		  	letter: event.key
		  });	
  	}
	}

	render() {
		return (
			<div className="letter">
				<div className="letter__character" onKeyDown={this.updateLetter} tabIndex="0">
		  		{this.state.letter}
		  	</div>
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
		  	`}</style>
		  </div>
	  )
	}
}

export default Letter
