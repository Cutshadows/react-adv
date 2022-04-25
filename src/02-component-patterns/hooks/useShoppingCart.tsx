import { useEffect, useRef, useState } from 'react';
import { product1, product2 } from '../data/products';
import { onChangeArgs, Product } from '../interface/Product.dto';

// interface ShoppingCartProps {
// 	product: Product;
// 	onChange?: (args: onChangeArgs)=> void;
// 	value?: number;
// }

interface ProductInCart extends Product {
	count: number;
}


export const useShoppingCart = () => {
	// const products: Product[] = [product1, product2];
	const [shoppingCart, setShoppingCart]= useState<{ [key: string]: ProductInCart }>({});

	const onProductOnchange = ({count, product}: {count: number, product:Product})=>{
		setShoppingCart( oldShoppingCart => {
			const productInCart = oldShoppingCart[product.id] || {...product, count: 0};
			if(Math.max(productInCart.count + count, 0) > 0){
				productInCart.count += count;

				return {
					...oldShoppingCart,
					[product.id]: productInCart
				};
			};

			const {[product.id]: toDelete, ...rest} = oldShoppingCart;

			return rest;
		
		});
	};

	return {
		shoppingCart, 
		onProductOnchange
	};
};