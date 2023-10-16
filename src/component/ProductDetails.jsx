import PropTypes from 'prop-types';

//Kiểm tra kiểu dữ liệu của props
ProductDetails.prototype = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  content: PropTypes.string,
}

//Giá trị mặc định của props
ProductDetails.defaultProps = {
  price: 0,
  content: 'NOT AVAILABLE',
}
export function ProductDetails(props) {
  return (
    <div>
      <h1>Product Details: {props.title}</h1>
      <h3>Price: {props.price}$</h3>
      <p>Content: {props.content}</p>
    </div>
  );
}