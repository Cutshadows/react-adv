import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interface/Product.dto';

interface HookProps {
	product: Product;
	onChange?: (args: onChangeArgs)=> void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({product, onChange, value = 0, initialValues}: HookProps) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);
	const isMounted = useRef(false);
	
	// const isControlled = useRef(!!onChange);

	const increaseBy = (value: number): void=> {
		
		let newValue = Math.max(counter + value, 0);
		if(initialValues?.maxCount){
			newValue = Math.min(newValue, initialValues.maxCount);
		}
		
		setCounter( newValue );

		onChange && onChange({count: newValue, product});
	};


	useEffect(() => {
		if(!isMounted.current){return;};
		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {counter, increaseBy};
};