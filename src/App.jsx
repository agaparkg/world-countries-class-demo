import React, { Component } from 'react';
import Countries from './components/Countries.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import './App.css';

const url = 'https://restcountries.com/v3.1/all'; // <-- New URL

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      totalItems: '',
      totalPages: '',
      countries: [],
      itemsPerPage: 16,
    };
  }

  componentDidMount() {
    const { itemsPerPage } = this.state;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          countries: data,
          totalItems: data.length,
          totalPages: Math.ceil(data.length / itemsPerPage),
        });
      })
      .catch((err) => console.error(err));
  }

  changePagination = (page) => {
    const { totalPages } = this.state;
    if (page >= 1 && page <= totalPages) {
      this.setState({ activePage: page });
    }
  };

  render() {
    const { activePage, totalItems, totalPages, countries, itemsPerPage } =
      this.state;
    const headerProps = {
      activePage: activePage,
      totalItems: totalItems,
      totalPages: totalPages,
      changePagination: this.changePagination,
    };

    const countriesProps = {
      countries: countries,
      activePage: activePage,
      itemsPerPage: itemsPerPage,
    };

    return (
      <div className='App'>
        <Header {...headerProps} />
        <Countries {...countriesProps} />
        <Footer />
      </div>
    );
  }
}
