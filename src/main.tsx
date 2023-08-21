import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './RouteSwitcher';
import './index.css'

export interface CartData {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image: string;
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

	<React.StrictMode>
			<RouteSwitch />
	</React.StrictMode>,
)

