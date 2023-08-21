import {describe, expect, it } from 'vitest';
import { formatPrice, boolSwitch } from "../src/components/functions";



describe.skip('formatPrice Tests', () => {
	const price1 = 10.99;
	const price2 = 10.1;
	const price3 = 10;

	it('formatPrice converts the number to a string', () => {
		const newPrice = formatPrice(price1);
		expect(newPrice).toBe('$ 10.99');
	})
	
	
	it('formatPrice returns a string to the 2nd decimal ', () => {
		const newPrice = formatPrice(price2);
		expect(newPrice).toBe('$ 10.10');
	})

	it('formatPrice adds to the end of a string', () => {
		const newPrice = formatPrice(price3);
		expect(newPrice).toBe('$ 10.00');
	})
})

describe('boolSwitch()', () => {
	it('Turns true to false' , () => {
		expect(boolSwitch(true)).toBe(false);
	})

	it('Turns false to true' , () => {
		expect(boolSwitch(false)).toBe(true);
	})
})