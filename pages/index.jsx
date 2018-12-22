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
			<div onKeyDown={this.updateLetter} tabIndex="0">
	  		{this.state.letter}
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
