import ReactDOM from 'react-dom'
import React from 'react'
import './base.css'

const URL = "http://localhost:3000"

class PromptForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		  value: '',
		  hasUserInput : false,
		  suggestion: '',
		  showSuggestion : false,
		  selectionText : "",
	  };
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleApply = this.handleApply.bind(this);

	  props.window.onmessage = this.handleSelection.bind(this)
	}

	handleSelection(event) {
		this.setState({
			selectionText: event.data.pluginMessage
		});
	}
  
	handleChange(event) {
	  	this.setState({
		  value: event.target.value,
		});
	}

	async handleSubmit(event) {
	  event.preventDefault();
	  const response = await fetch(`${URL}/api/generate`, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({ prompt: this.state.value }),
	  });
	  try {
		const data = await response.json();
		this.setState({
			suggestion : data.result.trim(),
			showSuggestion : true,
		});
	  } catch (error) {
		console.log(error)
		alert(error)
	  }
	  
	}

	async handleApply(event) {
		event.preventDefault();
		parent.postMessage({ 
			pluginMessage: {
				"type" : "Apply Suggestion",
				"data" : this.state.suggestion,
			}
		}, "*")
	}
  
	render() {
	  return (
		<div>
			<form onSubmit={this.handleSubmit} className={this.state.showSuggestion? 'hidden' : undefined}>
				<div className="section" id="title">
					<h2 key={'this.state.selectionText'}>T {this.state.selectionText}</h2>
				</div>
				<div className="section" id="text_entry">
					<h2>Describe your copy</h2>
					<label id="text_input">
						<input placeholder={this.state.selectionText} type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
				</div>
				<div id="submission">
					<input className="action" type="submit" value="Suggest" />
				</div>
			</form>
			<form className={this.state.showSuggestion ? undefined : 'hidden'} onSubmit={this.handleApply}>
				<div className="section" id="title">
					<h2>T {this.state.selectionText}</h2>
				</div>
				<div className="section" id="prompt">
					<h2>Suggestion</h2>
					<p id="suggestion">{this.state.suggestion}</p>
				</div>
				<div id="submission">
      				<button className="action" type="submit">Apply</button>
				</div>
    		</form>
		</div>
	  );
	}
}

function UI() {
	return <PromptForm window={window}></PromptForm>
}

ReactDOM.render(<UI />, document.getElementById('ui'))
