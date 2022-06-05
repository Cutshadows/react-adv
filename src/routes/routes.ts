import { lazy, LazyExoticComponent } from 'react';
// import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1 } from '../01-lazyload/pages';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    name: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>
}


const ShoppingPages= lazy(()=>import(/* webpackChunkName: "ShoppingStore"*/ '../02-component-state-initializer/pages/ShoppingPages'));


export const routes: Route[] = [
	{	
		path: '/shopping/*',
		to: '/shopping/',
		Component: ShoppingPages,
		name: 'shopping'
	},
];