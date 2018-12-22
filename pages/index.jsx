let letterValue = "A";

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
		  			background-color: #ff5994;
		  			color: #edff8f;
		  			font-family: "Comic Sans MS", cursive, sans-serif;
		  			position: absolute;
		  			top: 0;
		  			left: 0;
		  			right: 0;
		  			bottom: 0;
		  			font-size: 25rem;
		  			text-align: center;
		  		}
		  	`}</style>
		  </div>
	  )
	}
}

const Page = () => (
	<div>
  	<Letter value="A" />
  </div>
)

export default Page
