import React from 'react';
function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div className='row d-flex justify-content-center'>
      <div className="col-3 d-flex justify-content-center">
        {gotoPrevPage &&  <button className='btn btn-success' onClick={gotoPrevPage}>Prev</button>  }
       
      </div>
      <div className="col-3 d-flex justify-content-center">
      {gotoNextPage &&   <button className='btn btn-primary' onClick={gotoNextPage}>Next</button>}
      </div>
    
  </div>
  
  )
}

export default Pagination
