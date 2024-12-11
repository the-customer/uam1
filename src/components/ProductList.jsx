import './ProductList.css';

export default function ProductList(props) {
  return (
    <>
        <h2>Products</h2>
        <div className="List">{props.children}</div>
    </>
  )
}
