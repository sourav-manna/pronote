import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    // to bind the method with event handler without (). 
    this.handleChange = this.handleChange.bind(this);
    this.state =
    { 
        value: ''
    };
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }
  render(){
    return <>
    <body>
      <div className='ln'>
        <label className= "l1">Input</label>
        <div  className='sub'>
        <textarea className="input" onChange={this.handleChange} defaultValue={this.state.value}></textarea>
        </div>
      </div>
      <div>
        <label>Pro Note</label>
        <div  className='sub'>
        <textarea className="output" value={this.state.value} readOnly></textarea>
        </div>
      </div>
      </body>
    </>
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);