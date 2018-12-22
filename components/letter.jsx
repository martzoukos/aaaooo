class Letter extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {
    	letter: "A"
    };
  }

  updateLetter = (event) => {
		this.setState({
	  	letter: event.key
	  });
	}

	render() {
		return (
			<div>
				<div className="the-letter" onKeyDown={this.updateLetter} tabIndex="0">
		  		{this.state.letter}
		  	</div>
		  	<style jsx>{`
		  		.the-letter {
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
