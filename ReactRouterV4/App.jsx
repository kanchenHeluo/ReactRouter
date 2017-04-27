import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Gists from './Gists'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class Index extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
    	title: 'index page',
    	idx: 0
    }
    this.addIdx = this.addIdx.bind(this)
  }

  addIdx(){
  	const idx = this.state.idx + 1
  	this.setState({idx: idx})
  }

  componentWillMount(){
  	this.setState({idx: this.props.idx})
  }

  componentWillUnmount(){
  	this.props.onUnmount(this.state.idx);
  }

  render() {
    return (
    	<div>
	      <h1>
	        {this.state.title} - {this.state.idx}
	      </h1>
	      <input type='button' value='add' onClick={this.addIdx} />
      	</div>
    );
  }
}

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			idx:1
		}
		this.callunmount = this.callunmount.bind(this)

	}

	callunmount(value){
		this.setState({idx:value});
		console.log('App value='+value)
	}

	render(){
		return(<Router>
			    <div>
			      <ul>
			        <li><Link to="/">Gists</Link></li>
			        <li><Link to="/about">About</Link></li>
			        <li><Link to="/idx">Index</Link></li>
			      </ul>

			      <hr/>

			      <Route exact path="/" component={Gists}></Route>
			      <Route path="/about" component={About}/>
			      
			      <Route path="/idx" component={() => (<Index idx={this.state.idx} onUnmount={this.callunmount}/>)}/>
			    </div>
			  </Router>)
	}
}

export default App;