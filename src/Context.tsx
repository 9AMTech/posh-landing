import { createContext, SetStateAction, Dispatch } from 'react';
import { CartData } from './RouteSwitcher';
import { FakeStoreData } from './components/Layout/Layout';

interface ICartContext {
	cart: CartData[],
	setCart: Dispatch<SetStateAction<CartData[]>>,
}

export const ProductContext = createContext<FakeStoreData[]>([]);

export const CartContext = createContext<ICartContext>({
	cart: [],
	setCart: () => { },
});