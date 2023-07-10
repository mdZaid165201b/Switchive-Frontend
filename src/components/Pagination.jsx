import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ data, setData, itemPerPage }) => {
  const [currentItems, setCurrentItems] = useState([]);  
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemPerPage)
//   const itemsPerPage = 10;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    const pageCount = Math.ceil(data.length / itemsPerPage);
    setPageCount(pageCount);
    setData(currentItems)
    setItemsPerPage(itemPerPage)
  }, [ itemOffset, itemsPerPage, data, itemPerPage ]);
  setData(currentItems)
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="pagination-container"
      activeClassName="activePage"
      pageClassName="page"
      nextLinkClassName="nextLink"
      previousLinkClassName="previousLink"
    />
  );
};

export default Pagination;
