import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    users: [
      {
      name:'Userdefault',
      phone:'9876543210'
      },
      {
        name:'Userdefault2',
        phone:'8888777735'
      },
    ]
  };

  /*
  addUser = (e) => {
    const userName = e.target.elements.userName.value;
    const userPhone= e.target.elements.userPhone.value;
    const user={
      name:userName,
      phone:userPhone 
    }
    this.setState({ users: this.state.users.concat(user) });
    console.log("User Added");
  }
  */

  deleteUser=(phone)=>{
    this.setState({
      users:this.state.users.filter(user=>user.phone!==phone)
    });
    console.log("User Deleted");
  };

  hydrateStateWithLocalStorage() {
    //credits:www.hackernoon.com
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    //credits:www.hackernoon.com
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  componentWillMount(){
    localStorage.getItem('users') && this.setState({
      users:JSON.parse(localStorage.getItem('users'))
    })
  }

  componentDidMount(){
    if(this.props!==undefined)
    { 
      this.hydrateStateWithLocalStorage();
      if(this.props.location.state!==null){
      const updatedUsers=this.state.users.concat(this.props.location.state);
      this.setState({users:updatedUsers});

      console.log(this.props.location.state)
      console.log(updatedUsers)

      window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
     }
    }
    else{
      this.hydrateStateWithLocalStorage();
      window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
  
    }
  }

  componentWillUnmount(){
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header-title">PHONE DIRECTORY</h1>
        </header>
        <button className='form__button' style={{margin:"2rem"}}>
          <Link to={{pathname:'/add'}}>
            Add
          </Link>   
        </button>
        <div style={{marginLeft:"3rem",marginBottom:"1rem"}} className="grid_container">
            <div className="grid_item" style={{fontWeight:"bold"}}>Name </div>
            <div className="grid_item" style={{fontWeight:"bold"}}>Phone</div>
        </div>  
        {this.state.users.map((user)=>{
          return(  
          <div key={user.phone} style={{marginLeft:"3rem"}} className="grid_container2">
            <div className="grid_item">{user.name}</div>
            <div className="grid_item">{user.phone}</div>
            <button className="delete_button" onClick={() => this.deleteUser(user.phone)}>DELETE</button>
          </div>  
          )
        })}
      </div>
    );
  }
}

export default App;