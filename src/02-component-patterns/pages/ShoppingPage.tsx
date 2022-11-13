import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

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
                    <ProductCard.Title title={'Cafe'} />
                    <ProductCard.Buttons />
                </ProductCard>

                {/* mismo codigo pero sin usar las propiedades del ProductCard ver components,index.ts para ver como hemos exportado los componentes
                en el ejemplo de arriba y abajo, en este ejemplo los importamos directamente arriba linea 1*/ }
                <ProductCard
                    product={product}
                    // incluimos el estilo que sera pasado en las props al componente ProductCard,ponemos dos estilos
                    className="bg-dark text-white">
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                    <ProductImage
                        className="custom-images"
                        // añadimos un estilo en linea que lo pasaremos en las props al ProductCard
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                    />
                    {/* en este caso no ponemos el titulo y usara el titulo del objeto  product
                    le pasamos por las props los estilos  del archivo custom-styles.css */}
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>


                {/* creamos otro componente pero ponemos los botones arriba solo para ver que se pueden convinar los diferentes
                componente hijos como queramos */}
                <ProductCard
                    product={product}
                    className="bg-dark text-white">
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                    <ProductButtons className="custom-buttons" />
                    <ProductCard.Image className="custom-images" />
                    <ProductCard.Title title={'Cafe Quijano'} className="text-bold" />
                </ProductCard>

                <ProductCard
                    product={product}
                    // añadimos un estilo en linea que lo pasaremos en las props al ProductCard
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    {/* creamos un High Order Component(HCO) para que reciba los componentes hijos 
                    que seran los componentes creados en el archivo ProductCatrd.tsx*/}
                    <ProductCard.Image
                        // añadimos un estilo en linea que lo pasaremos en las props al ProductCard
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                    />

                    <ProductCard.Title
                        // añadimos un estilo en linea que lo pasaremos en las props al ProductCard
                        style={{
                            fontWeight: 'bold'
                        }} />
                    <ProductButtons
                        // añadimos un estilo en linea que lo pasaremos en las props al ProductCard
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }} />
                </ProductCard>
            </div>
        </div>
    )
}
