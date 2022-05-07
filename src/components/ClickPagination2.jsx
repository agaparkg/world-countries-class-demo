import React from 'react';
import { Button } from 'reactstrap';

const ClickPagination = ({ changePagination, activePage }) => {
  return (
    <div className='pagination'>
      <Button onClick={() => changePagination(activePage - 1)}>Previous</Button>
      <Button onClick={() => changePagination(activePage + 1)} color='primary'>
        Next
      </Button>
    </div>
  );
};

export default ClickPagination;
