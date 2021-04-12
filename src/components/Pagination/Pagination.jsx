export const Pagination = ({offset, limit, total, setCurrentPage}) => {
  let pagesCount = Math.ceil(total / limit);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const currentPages = (page) => {
    let pages = limit * page + 1;
    setCurrentPage(pages);
  };
  
  return (
    <div className='pagination'>
        {pages.map((item) => (
          <span
            onClick={() => currentPages(item - 1)}
            key={item}
            className={item === Math.ceil(offset / limit) ? 'pagination__item active' : 'pagination__item'}>
            {item}
          </span>
        ))}
      </div>
  )
}
