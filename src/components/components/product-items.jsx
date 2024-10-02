import styles from "./product-item.module.css" //this provides an object with the style names and the values that can be used here
function ButtonComponent(){
    console.log(styles.buttonStyle);
    return <button className={styles.buttonStyle}>Click</button>;
}

function ProductItem({singleProductItem, key}) {
    return (
        <div key={key}>
            <p>{singleProductItem}</p>
        <ButtonComponent/>
        </div>
    )
}
export default ProductItem;