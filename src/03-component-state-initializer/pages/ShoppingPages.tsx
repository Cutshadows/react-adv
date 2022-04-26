import {ProductCard} from '../components';
import { products } from '../data/products';
import '../styles/components/pages/shopping.component.css';

const product=products[0];

const ShoppingPages = () => {

	
	return (
		<div  >
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}} >
				<ProductCard 
					product={product}
					key={product.id} 
					className="bg-dark text-white"
					// onChange={onProductOnchange}
					// value={shoppingCart[product.id]?.count || 0}
					initialValues={{
						count: 4,
						maxCount: 10
					}}
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

				{/* <div className='shopping-cart'>
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
				</div> */}
				
			</div>
		</div>
	);
};

export default ShoppingPages;
