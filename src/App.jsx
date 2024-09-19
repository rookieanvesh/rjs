
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

const dummyProductsData = ["Product 1",  "Product 2", "Product 3"]
function App() {


  return (
    <>
      <div>
        <h1>React js concepts 2024</h1>
        {/* <ClassBasedComponent/>
        <FunctionalComponent/> */}
        <ProductList list = {dummyProductsData} name="xyz" city="ashta"/>
        
      </div>
    </>
  )
}

export default App;
