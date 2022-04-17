import styles from '../styles/styles.module.css';
import imgPython from '../assets/scope_python.webp';
import { useProduct } from '../hooks/useProduct';

interface Props {
	product: Product;
}

interface Product {
	id: string;
	title: string;
	img?: string;
}

export const ProductImage = ({ img = '' }) : JSX.Element => {
	return (
		<img src={img ? img : imgPython} alt={img} className={styles.productImg} />
	);
};

export const ProductTitle = ({ title }: { title: string }) =><span className={styles.productDescription}>{title}</span>;


interface ProductButtonsProps {
	counter: number;
	increaseBy: (value: number) => void;
}

export const ProductButtons = ({
	counter,
	increaseBy,
}: ProductButtonsProps) => {
	return (
		<div className={styles.buttonsContainer}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}> {counter} </div>
			<button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	);
};

export const ProductCard = ({ product }: Props) => {
	const { counter, increaseBy } = useProduct();

	return (
		<div className={styles.productCard}>
			<ProductImage img={product.img} />
			<ProductTitle title={product.title} />
			<ProductButtons counter={counter} increaseBy={increaseBy} />
		</div>
	);
};
