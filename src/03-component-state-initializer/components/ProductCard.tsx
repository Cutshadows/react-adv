import { createContext, Fragment} from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps } from '../interface/Product.dto';



export const ProductContext = createContext({ ProductState: { counter: 0, product: { id: '', title: '', img: 'https://w7.pngwing.com/pngs/364/982/png-transparent-python-programming-language-computer-programming-language-angle-text-computer-thumbnail.png' }, increaseBy: (value: number) => {} } });
const { Provider } = ProductContext;










export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

	const { counter, increaseBy } = useProduct( {onChange, product, value, initialValues} );


	return (
		<Fragment>
			<Provider value={{
				ProductState:{
					counter,
					increaseBy,
					product,
				}
			}}>
				<div className={`${styles.productCard } ${className}`} style={style}>
					{children}
				</div>
			</Provider>
		</Fragment>
	);
};


