import { createContext, PropsWithChildren, useContext } from 'react';

const CartContext = createContext({});

import { ReactNode } from 'react';

const CartProvider = ({ children }: PropsWithChildren) => {
    return (
        <CartContext.Provider value={{ items: [1,2,3], onAddItem: () => {}}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

export const useCart = () => useContext(CartContext); 