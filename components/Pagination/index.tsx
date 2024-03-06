import React from "react";
import ReactPaginate from "react-paginate";


interface PaginationProps {
  elementsList: React.ReactNode[];
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  elementsList, itemsPerPage
}) => {
  const [diapasonToShow, setDiapasonToShow] = React.useState<{ startIndex: number; endIndex: number } | null>({
    startIndex: 0,
    endIndex: itemsPerPage - 1
  });
  const pagesAmnt = React.useRef(Math.ceil(elementsList.length / itemsPerPage));

  const onPageChange = (e: { selected: number }) => {
    const startIndex = e.selected * itemsPerPage;
    const endIndex = startIndex + itemsPerPage - 1;
    setDiapasonToShow({
      startIndex,
      endIndex
    })
  }

  return <>
    {
      diapasonToShow && <>
        {elementsList.slice(diapasonToShow.startIndex, diapasonToShow.endIndex + 1)}
        {pagesAmnt.current === 1 ? null : <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="arrow_back"
            onPageChange={onPageChange}
            pageRangeDisplayed={5}
            pageCount={pagesAmnt.current!}
            previousLabel="arrow_back"
            className="elements-pagination material-symbols-outlined"
            pageClassName="pagination__item"
            renderOnZeroPageCount={null}
          />
        </>}
      </>
    }
  </>;
}



export default Pagination;