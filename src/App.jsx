import React, { Component } from "react";
import ClickPagination from "./ClickPagination.jsx"
import Countries from "./Countries.jsx"
import "./App.css";

const url = "https://restcountries.eu/rest/v2/all"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      totalPages: "",
      totalItems: "",
      countries: [],
      itemsPerPage: 16
    };
  }

  componentDidMount() {
    const { itemsPerPage } = this.state;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          countries: data,
          totalItems: data.length,
          totalPages: Math.ceil(data.length/itemsPerPage)
        })
      })
      .catch(err => console.error(err))
  }

  changePagination = (page) => {
    if (page >= 1 && page <=25) {
      this.setState({ activePage: page})
    }
  }

  render() {
    const { activePage, totalItems, totalPages, countries, itemsPerPage } = this.state
    return (
      <div className="App">
        <h3>WORLD COUNTRIES WITH REST API</h3>
        <header>
          <div id="total-count">{totalItems} countries</div>
          <div id="page-count">Page {activePage}/{totalPages}</div>
          <ClickPagination changePagination={this.changePagination} activePage={activePage} total_pages={totalPages}/>
        </header>
        <Countries countries={countries} activePage={activePage} itemsPerPage={itemsPerPage} />
        <div id="api-link">
          Rest api link: <a target="_new" href="https://restcountries.eu/rest/v2/all">https://restcountries.eu/rest/v2/all</a>  
        </div>
      </div>
    )
  }
}
