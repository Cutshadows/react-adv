import {ProductCard} from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/components/pages/shopping.component.css';



const ShoppingPages = () => {

	const {
		onProductOnchange, 
		shoppingCart 
	}= useShoppingCart();
	
	return (
		<div  >
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}} >
				{
					products.map(product => (
						<ProductCard 
							product={product}
							key={product.id} 
							className="bg-dark text-white"
							onChange={onProductOnchange}
							value={shoppingCart[product.id]?.count || 0}
						>
							<ProductCard.Image 
								img={product.img} 
								className="custom-image" 
							/>
							<ProductCard.Title 
								title={product.title} 
								className="text-white text-bold"
							/>
							<ProductCard.Buttons 
								className="text-white custom-buttons"
							/>
						</ProductCard>
					))
				}

				<div className='shopping-cart'>
					{
						Object.entries(shoppingCart).map(([id, product]) => (
							<ProductCard 
								product={product} 
								key={id} 
								style={{
									width: '100px'
								}}
								value={product.count}
								onChange={onProductOnchange} 
								className="bg-dark text-white">
								<ProductCard.Image 
									img={product.img} 
									className="custom-image" 
								/>
								<ProductCard.Buttons 
									className="text-white custom-buttons"
									style={{
										display: 'flex',
										justifyContent: 'center'
									}}
								/>
							</ProductCard>
						))
					}
				</div>
				
				
				{/* <ProductCard product={product} className="bg-dark text-white" >
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
				</ProductCard> */}
			</div>
		</div>
	);
};

export default ShoppingPages;
