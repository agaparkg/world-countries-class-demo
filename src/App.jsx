import React, { Component } from "react";
import Countries from "./components/Countries.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

const url = "https://restcountries.eu/rest/v2/all";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      totalPages: "",
      totalItems: "",
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
    if (page >= 1 && page <= 25) {
      this.setState({ activePage: page });
    }
  };

  render() {
    const {
      activePage,
      totalItems,
      totalPages,
      countries,
      itemsPerPage,
    } = this.state;
    return (
      <div className="App">
        <Header
          activePage={activePage}
          totalItems={totalItems}
          totalPages={totalPages}
          changePagination={this.changePagination}
        />
        <Countries
          countries={countries}
          activePage={activePage}
          itemsPerPage={itemsPerPage}
        />
        <Footer />
      </div>
    );
  }
}
