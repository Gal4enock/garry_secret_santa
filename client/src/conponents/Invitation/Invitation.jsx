import React, { Component } from 'react';
import style from './Invitation.module.css';
import fetchUsers from '../../services/fetchUsers';

class Invitation extends Component {
  state = {
    username: '',
    wishes: ''
  }

  handlechange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers.addUser(this.state.username, this.state.wishes)
  }

  render() {
    return (<div className={style.wrapper}>
      <h2 className={style.wishTitle}>Fill in the form below</h2>
      <form className={style.wishForm} action="submit" onSubmit={this.handleSubmit}>
        <label htmlFor="user">Please enter your Name and Surname</label>
        <input className={style.wishInput} type="text" name='username' id='user' onChange={this.handlechange} value={this.state.username} placeholder='Name Surname'/>
        <label htmlFor="wishes">Please enter your wishes for present from Secret Santa</label>
        <input className={style.wishInput} type="text" name='wishes' id='wishes' onChange={this.handlechange} value={this.state.wishes} placeholder='Your wishes' />
        <button type='submit' className={style.acceptButton}>JOIN</button>
      </form>
    </div>)
  }
}

export default Invitation;
