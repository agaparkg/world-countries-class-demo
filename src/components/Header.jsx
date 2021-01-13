import React from "react";
import ClickPagination from "./ClickPagination.jsx";

function Header({ totalItems, totalPages, changePagination, activePage }) {
  return (
    <>
      <h3>WORLD COUNTRIES WITH REST API</h3>
      <header>
        <div id="total-count">{totalItems} countries</div>
        <div id="page-count">
          Page {activePage}/{totalPages}
        </div>
        <ClickPagination
          changePagination={changePagination}
          activePage={activePage}
          total_pages={totalPages}
        />
      </header>
    </>
  );
}

export default Header;
