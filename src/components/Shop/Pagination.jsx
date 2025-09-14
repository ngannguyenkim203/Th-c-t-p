import Pagination from 'react-bootstrap/Pagination';
import '../../styles/paginationCustom.css'; 

function PaginationComponent() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <Pagination className="custom-pagination">
          <Pagination.Prev>
            <span>&larr;</span> Previous
          </Pagination.Prev>

          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis disabled />

          <Pagination.Item>{8}</Pagination.Item>
          <Pagination.Item>{9}</Pagination.Item>
          <Pagination.Item>{10}</Pagination.Item>

          <Pagination.Next>
            Next <span>&rarr;</span>
          </Pagination.Next>
        </Pagination>
      </div>
    </div>
  );
}

export default PaginationComponent;
