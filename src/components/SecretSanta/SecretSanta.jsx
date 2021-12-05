import React, { Component } from 'react';
import style from './SecretSanta.module.css';
import fetchUsers from '../../services/fetchUsers';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
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
    const users1 = [
      { _id: '61abd2b25318ecf97517afe3', username: 'Galyna Khyzhynska', wishes: 'theatres, good tea (flowered), mascara or surprise )) ', __v: 0 },
      { _id: '61abe0da5318ecf97517b02f', username: 'Наталія Петренко', wishes: 'Підсвічник, ялинкова іграшка красіва, свічка з аро…муму, щоб був вибір і мені все одно буде сюрприз)', __v: 0 },
      { _id: '61abe2335318ecf97517b038', username: 'Viktoria DYBKA ', wishes: 'no wishes', __v: 0 },
      { _id: '61abec4a5318ecf97517b045', username: 'Dmytro Vovchenko', wishes: 'Something Fishing', __v: 0 },
        {_id: '61ac8723321211249aa33353', username: 'Alla Vovchenko ', wishes: 'Chocolate😉', __v: 0},
      { _id: '61ad2155511c47e07ab4f1c0', username: 'dmitriy.savchenko', wishes: 'https://www.olx.ua/d/uk/obyavlenie/ugreen-usb-c-usb-type-c-pd-cable-macbook-apple-IDMvvtS.html', __v: 0 },
      { _id: '61ad2155511c47e07ab4f5c0', username: 'Савченко Наталья', wishes: 'Билеты в Молодой театр ', __v: 0 },
      { _id: '61ad2155511c48e07ab4f5c0', username: 'Vadym Dybka', wishes: 'давайте так - я хочу до 300 гривен самую непонятную ненужную хуйню. ну прост очето толковое нереальн опридумтаь. пусть это будет чтото специально ебонутое чтоб запомнилось чисто как подарок и как необычный НГ', __v: 0 },
      { _id: '61ad2155511c47e07ab4f5c0', username: 'Timka Khizhinskiy ', wishes: 'Sweetes', __v: 0 }
    ]
    console.log(users)
    return (
      <div className={style.App}>
        <header className={style.Searchbar}>
        <h1> <span className={style.firstLetter}>H</span>arry <span className={style.firstLetter}>P</span>otter</h1>
        <p>Secret Santa</p>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            </button>
            <UserList list={users1} handleChange={this.handleChange}/>
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
