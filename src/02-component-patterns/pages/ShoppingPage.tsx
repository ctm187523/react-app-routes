import { ProductCard } from "../components/ProductCard"

//creamos un objeto product que sera lo que enviemos al hijo ProductCard en las props
const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={ product }/>
            </div>

        </div>
    )
}
