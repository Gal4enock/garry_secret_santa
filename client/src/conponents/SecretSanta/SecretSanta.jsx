import React, { Component } from 'react';
import style from './SecretSanta.module.css';
import fetchUsers from '../../services/fetchUsers';
import ImageGallery from '../../conponents/ImageGallery/ImageGallery';
import UserList from '../UserList/UserList';

class SecretSanta extends Component {
  state = {
    inputValue: '',
    userArr: [],
    pickedName: '',
    userId: '',
    yourName: '',
    wishes: '',
    allUsers: []
  }

  handleChange = ({target}) => {
    this.setState({
      inputValue: target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers.getUsers(this.state.inputValue)
      .then(data => this.setState({ userArr: data }))
    }
    
  pickUser = (e) => {
      this.setState({
        pickedName: e.target.dataset.name,
        userId: e.target.dataset.id,
        wishes: e.target.dataset.wish
      })
    document.documentElement.scrollTop = 180;
    }
    
    acceptPair = (e) => {
      fetchUsers.deleteUser(this.state.userId)
      fetchUsers.createPair(this.state.inputValue, this.state.pickedName, this.state.wishes)
      this.setState({ pickedName: '', userArr: [] })
    }

  componentDidMount() {
    fetchUsers.getUsers().then(data => this.setState({ allUsers: data }))
  }
  
  render() {
    console.log(this.state.allUsers);
    const users = this.state.allUsers;
    return (
      <div className={style.App}>
        <header className={style.Searchbar}>
        <h1> <span className={style.firstLetter}>H</span>arry <span className={style.firstLetter}>P</span>otter</h1>
        <p>Secret Santa</p>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            </button>
            <UserList list={users} handleChange={this.handleChange}/>
        </form>
        </header>
        {this.state.inputValue &&
          <div>
          {(this.state.pickedName || this.state.userArr.message) &&
            <div className={style.bgd}>
          <div className={style.modal}>
              <div className={style.text}>
                <p>You are Santa for</p> 
                <p className={style.name}> {this.state.pickedName || this.state.userArr.havePair.toUser} </p>
                <p className={style.name}>Wishes: {this.state.wishes || this.state.userArr.havePair.wishes} </p>
            </div>
                <button onClick={this.acceptPair} type="button" className={style.acceptButton}>OK</button>
            </div>
            </div>}
          <h2 className={style.greeting}>Greetings, {this.state.inputValue}</h2>
          <p className={style.greeting}>
           Are you ready to be a Secret Santa?
          </p>
          <button className={style.button} onClick={this.handleSubmit} type="button">Yes !<span className={style.submitButton}></span> </button>
          </div>}
          <div className={style.wrapper}>
        {this.state.userArr.length > 0 &&
          <>
          <h3 className={style.pickText}>Pick one of this cards...</h3>
          <ImageGallery list={this.state.userArr} toOpen={this.pickUser} />
          </>}
          
        </div>
      </div>
    );
  };
};

export default SecretSanta;
