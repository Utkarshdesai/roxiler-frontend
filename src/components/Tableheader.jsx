import './table.css'

const Tableheader = () => {
  return (
    <div className="table-container">
    <table>
      <thead> 
      <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sold</th>
          <th>image</th>
        </tr>
      </thead>
     </table>
  </div>
  )
}

export default Tableheader