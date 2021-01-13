import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const ClickPagination = (props) => {
  return (
    <div className="pagination">
      <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={props.activePage <= 1}>
        <PaginationLink first href="#" onClick={() => props.changePagination(1)} />
      </PaginationItem>
      <PaginationItem disabled={props.activePage <= 1}>
        <PaginationLink previous href="#" onClick={() => props.changePagination(props.activePage - 1)} />
      </PaginationItem>
      <PaginationItem active={props.activePage === 1}>
        <PaginationLink href="#" onClick={() => props.changePagination(1)}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem  active={props.activePage === 2}>
        <PaginationLink href="#" onClick={() => props.changePagination(2)}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active={props.activePage === 3}>
        <PaginationLink href="#" onClick={() => props.changePagination(3)}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active={props.activePage === 4}>
        <PaginationLink href="#" onClick={() => props.changePagination(4)}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active={props.activePage === 5}>
        <PaginationLink href="#"  onClick={() => props.changePagination(5)}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={props.activePage + 1 > props.total_pages}>
        <PaginationLink next href="#"  onClick={() => props.changePagination(props.activePage + 1)}/>
      </PaginationItem>
      <PaginationItem disabled={props.activePage >= props.total_pages}>
        <PaginationLink last href="#" onClick={() => props.changePagination(props.total_pages)} />
      </PaginationItem>
    </Pagination>
  </div>
  );
}

export default ClickPagination;