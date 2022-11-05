import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

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
                {/* VER ARCHIVO components,index.ts para ver como hemos exportado los componentes
                solo se usa cuando usamos ProductCard.Image, Productcar.title, ProductCard.Buttons */}
                {/* Usamos el componente de tal manera que puede combinar los componentes hijos(children)
                como el usuario desee hemos creado un Compound Component Pattern*/}
                <ProductCard product={product}>
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                    <ProductCard.Image />
                    <ProductCard.Title title={'Cafe'}/>
                    <ProductCard.Buttons />
                </ProductCard>

                {/* mismo codigo pero sin usar las propiedades del ProductCard creadas al final del archivo 
                ProductCard.tsx propiedades como ProductCard.image de esta manera se soportan las dos maneras de hacerlo*/ }
                <ProductCard product={product}>
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                    <ProductImage />
                    {/* en este caso no ponemos el titulo y usara el titulo del objeto  product */}
                    <ProductTitle /> 
                    <ProductButtons />
                </ProductCard>

                
                {/* creamos otro componente pero ponemos los botones arriba solo para ver que se pueden convinar los diferentes
                componente hijos como queramos */}
                <ProductCard product={product}>
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                     <ProductButtons />
                    <ProductCard.Image />
                    <ProductCard.Title title={'Cafe Quijano'}/>
                </ProductCard>
            </div> 
        </div>
    )
}
