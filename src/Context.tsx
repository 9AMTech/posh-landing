import { createContext, SetStateAction, Dispatch } from 'react';
import { CartData } from './RouteSwitcher';

interface ICartContext {
	cart: CartData[],
	setCart: Dispatch<SetStateAction<CartData[]>>,
}

export const CartContext = createContext<ICartContext>({
	cart: [],
	setCart: () => {},
});