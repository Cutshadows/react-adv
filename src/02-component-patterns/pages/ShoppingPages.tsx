import { ProductButtons, ProductImage, ProductTitle} from '../components';
import {ProductCard} from '../components';
import '../styles/components/pages/shopping.component.css';

const ShoppingPages = () => {
	const product = {
		id: '1',
		title: 'Producto test',
		img: 'https://w7.pngwing.com/pngs/364/982/png-transparent-python-programming-language-computer-programming-language-angle-text-computer-thumbnail.png'
	};
	
	return (
		<div  >
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}} >
				<ProductCard product={product}  className="bg-dark text-white">
					<ProductCard.Image img='' className="custom-image" />
					<ProductCard.Title title={'Café'} className="text-white text-bold"/>
					<ProductCard.Buttons className="text-white custom-buttons"/>
					{/* <ProductCard.Buttons increaseBy={function (value:number):void {
					throw new Error('Function not implemented.');
					}}
					counter={0} /> */}
				</ProductCard>
				
				<ProductCard product={product} className="bg-dark text-white" >
					<ProductImage img=''  className="custom-image"/>
					<ProductTitle title={'Café'} className="text-white text-bold" />
					<ProductButtons className="text-white custom-buttons"/>
				</ProductCard>
				<ProductCard product={product} style={{
					backgroundColor: '#70D1F8',
				}}>
					<ProductImage img='' style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}  />
					<ProductTitle title={'Café'} style={{
						fontWeight: 'bold',
					}} />
					<ProductButtons  style={{
						display: 'flex',
						justifyContent: 'end',
					}}/>
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPages;
