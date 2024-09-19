import ProductItem from "../components/product-items"
import './style.css'

//const dummyProductsData = ["Product 1",  "Product 2", "Product 3"] we can pass the array directly in out App component
//and just pass the values directly like a normal function inside the tag 
// WE USE THE MAP METHOD TO RENDER THE PRODUCT LIST
const ProductList = ({name, city, list}) => {
    //instead of using props and then destructuring it, we can directly use {} to pass the values
    //console.log(props)
    //destructuring
    //const {name,city} = props
    return (
        <div>
            <h2 className="title">Ecommerce list</h2>
            {/* <ProductItem/> */}
            <h4>i am {name} from {city}</h4>
            <ul>
                {
                    list.map((item, index) => (
                        <ProductItem singleProductItem={item} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}
export default ProductList