import { ProductCard } from '../components/ProductCard';

const ShoppingPages = () => {
	const product = {
		id: '1',
		title: 'Producto test',
		img: 'https://w7.pngwing.com/pngs/364/982/png-transparent-python-programming-language-computer-programming-language-angle-text-computer-thumbnail.png'
	};
	
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
				<ProductCard product={product} />
			</div>
		</div>
	);
};

export default ShoppingPages;
