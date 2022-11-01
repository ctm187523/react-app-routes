import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/ProductCard';

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
                {/* Usamos el componente de tal manera que puede combinar los componentes hijos(children)
                como el usuario desee hemos creado un Compound Component Pattern*/}
                <ProductCard product={product}>
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                    <ProductCard.Image />
                    <ProductCard.Title title={'Cafe'}/>
                    <ProductCard.Buttons increaseBy={function (value: number): void {
                        throw new Error('Function  not implemented.');
                    }} counter={0} />
                </ProductCard>

                {/* mismo codigo pero sin usar las propiedades del ProductCard creadas al final del archivo 
                ProductCard.tsx propiedades como ProductCard.image de esta manera se soportan las dos maneras de hacerlo*/ }
                <ProductCard product={product}>
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                    <ProductImage />
                    <ProductTitle title={'Cafe'}/>
                    <ProductButtons increaseBy={function (value: number): void {
                        throw new Error('Function  not implemented.');
                    }} counter={0} />
                </ProductCard>
            </div>

        </div>
    )
}
