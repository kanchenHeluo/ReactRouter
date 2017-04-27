import React, {Component} from 'react'

class Gists extends Component{
	constructor(props){
		super(props)
		this.state = {
			gists: null
		}
	}

	componentDidMount(){
		fetch('https://api.github.com/gists')
			.then(res => res.json())
			.then(gists => {
				this.setState({ gists })
			})
	}

	render(){
		const gists = this.state.gists ? this.state.gists.splice(20) : null
		let content = gists ? (
						gists.map( (gist, idx ) => 
						<div key={idx}><a href='/g/'>
							{idx}{gist.description || '{no description}'}
						</a><br/></div>
						)) : (<div>...Loading</div>)
			
		return (<div>{content}</div>)
	}

}

export default Gists;