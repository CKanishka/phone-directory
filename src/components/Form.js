import React from 'react';
import { Link } from "react-router-dom";

class Form extends React.Component{
  state = {
    inputName:'',
    inputPhone:''
  }

  nameChange = (event) => {
    this.setState({inputName:event.target.value})
  }

  phoneChange = (event) => {
    this.setState({inputPhone:event.target.value})
  }

  render(){
    return(
    <div>
      <header className="header">
          <h1 className="header-title">ADD SUBSCRIBER</h1>
      </header>
      <div style={{margin:"3rem"}}>
        <button style={{marginBottom:"2rem",cursor:"pointer"}}> 
          <Link to={{pathname:'/',state:{name:null,phone:null}}}>
          BACK
          </Link> 
        </button>
        <form onSubmit={this.props.addUser} style={{marginBottom:"2rem"}}>
          <h3>Name:</h3><input className='form__input' type='text' name='userName' onChange={this.nameChange} />
          <h3>Phone:</h3><input className='form__input' type='text' name='userPhone' onChange={this.phoneChange}/>
          <h5 style={{marginTop:"2rem"}}>Subscriber to be added:</h5>
          <p className="active-userName">
            Name: <span>{ this.state.inputName }</span>
          </p>
          <p className="active-userPhone"> 
            Phone:<span>{this.state.inputPhone}</span>
          </p>
          <button className='form__button'>
            <Link to={{pathname:"/",state:{name:this.state.inputName,phone:this.state.inputPhone}}}>
              Add 
            </Link>   
          </button>
        </form> 
        <hr/>
      </div>        
    </div>
    );
  }
}
export default Form;