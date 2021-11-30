import React, { Component } from 'react';
import style from './App.module.css';
import fetchUsers from '../services/fetchUsers';
import ImageGallery from '../conponents/ImageGallery/ImageGallery';
class App extends Component {
  state = {
    inputValue: '',
    userArr: [],
    pickedName: ''
  }

  handleChange = ({target}) => {
    this.setState({
      inputValue: target.value
    })
    console.log(target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers.getUsers(this.state.inputValue)
      .then(data => this.setState({ userArr: data }))
  }

  pickUser = (e) => {
    this.setState({pickedName: e.target.dataset.name})
  }
  render() {
    console.log(this.state.pickedName);
    return (
      <div className={style.App}>
        <header className={style.Searchbar}>
        <h1> <span className={style.firstLetter}>H</span>arry <span className={style.firstLetter}>P</span>otter</h1>
        <p>Secret Santa</p>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
          </button>
          <select onChange={this.handleChange} className={style.startSelect}>
            <option >Choose your name from the list</option>
            <option value="Natalia Petrenko">Natalia Petrenko</option>
            <option value="Natalia Savchenko">Natalia Savchenko</option>
            <option value="Dmytro Savchenko">Dmytro Savchenko</option>
            <option value="Tymofii Khyzhynskyi">Tymofii Khyzhynskyi</option>
            <option value="Halyna Khyzhynska">Halyna Khyzhynska</option>
            <option value="Viktoria Dybka">Viktoria Dybka</option>
            <option value="Vadym Dybka">Vadym Dybka</option>
            <option value="Алла Вовченко">Alla Vovchenko</option>
            <option value="Dmytro Vovchenko">Dmytro Vovchenko</option>
          </select>
        </form>
        </header>
        {this.state.inputValue &&
          <div>
          {this.state.pickedName &&
            <div className={style.bgd}></div>}
          <h2 className={style.greeting}>Greetings, {this.state.inputValue}</h2>
          <p className={style.greeting}>
           Are you ready to be a Secret Santa?
          </p>
          <button className={style.button} onClick={this.handleSubmit} type="button">Sure!<span className={style.submitButton}></span> </button>
          </div>}
          <div className={style.wrapper}>
        {this.state.userArr.length > 0 &&
          <>
          <h3 className={style.pickText}>Pick one of this cards...</h3>
          <ImageGallery list={this.state.userArr} toOpen={this.pickUser} />
          </>}
          {this.state.pickedName &&
          <div className={style.modal}>
            <p className={style.text}>You are Santa for
              <p className={style.name}> {this.state.pickedName} </p>
            </p>
            </div>}
        </div>
      </div>
    );
  };
};

export default App;
