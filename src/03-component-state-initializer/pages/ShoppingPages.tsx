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
					initialValues={{
						count: 4,
						maxCount: 10
					}}
				>
					{
						({reset, increaseBy, count, maxCount, isMaxCountReached})=> (
							<>
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

								<button onClick={reset} >Reset</button>
								<button onClick={()=>increaseBy(+2)} >Incrementar +2</button>
								{
									isMaxCountReached && <button onClick={()=>increaseBy(-2)} >Decrementar -2</button>
								}
								
								<span >Count: {count} - MaxCount: {maxCount}</span>
							</>
						)
					}
				</ProductCard>

			</div>
		</div>
	);
};

export default ShoppingPages;
