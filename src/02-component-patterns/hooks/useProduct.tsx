import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interface/Product.dto';

interface HookProps {
	product: Product;
	onChange?: (args: onChangeArgs)=> void;
	value?: number;
}

export const useProduct = ({product, onChange, value = 0}: HookProps) => {
	const [counter, setCounter] = useState(value);

	// const isControlled = useRef(!!onChange);

	const increaseBy = (value: number): void=> {
		
		// if(isControlled.current && onChange){
		// 	return onChange({count: value, product});
		// }
		const newValue = Math.max(counter + value, 0);
		setCounter( prev => Math.max( prev + value, 0));
		onChange && onChange({count: newValue, product});
	};


	useEffect(() => {
		setCounter(value);
	}, [value]);

	return {counter, increaseBy};
};