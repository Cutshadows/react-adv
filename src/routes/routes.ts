import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1 } from '../01-lazyload/pages';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    name: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>
}

// const LazyPage1= lazy(()=>import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/lazyPage1'));
// const LazyPage2= lazy(()=>import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/lazyPage2'));
// const LazyPage3= lazy(()=>import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/lazyPage3'));
// const LazyLayout= lazy(()=>import(/* webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));
const ShoppingPages= lazy(()=>import(/* webpackChunkName: "ShoppingStore"*/ '../02-component-state-initializer/pages/ShoppingPages'));

// lint-disable-next-line
// {
//     to: 'lazy2',
//     path: 'lazy2',
//     Component: LazyPage2,
//     name: 'lazy-2'
// },

export const routes: Route[] = [
	{	
		path: '/shopping/*',
		to: '/shopping/',
		Component: ShoppingPages,
		name: 'shopping'
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No Lazy'
	}
];