import React, { Component } from 'react';
import style from './App.module.css';
// import SearchBar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    inputValue: '',
  }

  handleChange = ({target}) => {
    this.setState({
      inputValue: target.value
    })
    console.log(target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue)
    this.setState({inputValue: ''})
  }
  render() {
    return (
      <div className={style.App}>
        <header className={style.Searchbar}>
        <h1> <span className={style.firstLetter}>H</span>arry <span className={style.firstLetter}>P</span>otter</h1>
        <p>Secret Santa</p>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
          </button>
          <select onChange={this.handleChange} className={style.startSelect}>
            <option >Выберите ваше имя из списка</option>
            <option value="Наташа Петренко">Наташа Петренко</option>
            <option value="NataS">Наташа Савченко</option>
            <option value="DimaS">Дима Савченко</option>
            <option value="Tima">Тимофей Хижинский</option>
            <option value="Galya">Галина Хижинская</option>
            <option value="Vika">Виктория Дыбка</option>
            <option value="Vadim">Вадим Дыбка</option>
            <option value="Alla">Алла Вовченко</option>
            <option value="DimaV">Дима Вовченко</option>
          </select>
          {/* <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          /> */}
        </form>
      </header>
      </div>
    );
  };
};

export default App;
