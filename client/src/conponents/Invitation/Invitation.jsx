import React, { Component } from 'react';
import style from './Invitation.module.css';
import fetchUsers from '../../services/fetchUsers';

class Invitation extends Component {
  state = {
    username: '',
    wishes: '',
    user: '',
    error: false
  }

  handlechange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('object');
    try {
      const res = await fetchUsers.addUser(this.state.username, this.state.wishes);
      if (res) {
        this.setState({
          username: '',
          wishes: '',
          user: res
        })
      }
    } catch (err) {
      this.setState({
        error: true
      });
    }
  };
  
  handleAccept = () => {
    this.setState({
      user: '',
      error: false
      })
  }

  render() {
    return (<div className={style.wrapper}>
      {(this.state.user || this.state.error)  &&
        <div className={style.bgd}>
          <div className={style.modal}>
            <div className={style.text}>
            {this.state.user && <p>Congrats! You're in !</p>}
            {this.state.error && <p>Sorry, you can join us only one time</p>}
            </div>
            <button onClick={this.handleAccept} type="button" className={style.button}>OK</button>
          </div>
        </div>}
      <h2 className={style.wishTitle}>Fill in the form below</h2>
      <form className={style.wishForm} action="submit" onSubmit={this.handleSubmit}>
        <label htmlFor="user">Please enter your Name and Surname</label>
        <input className={style.wishInput} type="text" name='username' id='user' onChange={this.handlechange} value={this.state.username} placeholder='Name Surname' />
        <label htmlFor="wishes">Please enter your wishes for present from Secret Santa</label>
        <input className={style.wishInput} type="text" name='wishes' id='wishes' onChange={this.handlechange} value={this.state.wishes} placeholder='Your wishes' />
        <button type='submit' className={style.acceptButton}>JOIN</button>
      </form>
    </div>);
  }
}

export default Invitation;
