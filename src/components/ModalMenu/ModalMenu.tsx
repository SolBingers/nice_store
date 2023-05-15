import React, { Dispatch, SetStateAction, useContext } from 'react';
import modalStyle from './ModalMenu.module.scss';
import classNames from 'classnames';
import { ProductItem } from '../ProductItem';
import { Button } from '../Button';
import { Product } from '../../types/types';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { CartContext } from '../../contexts/CartContext';
type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [products, setProducts] = useLocalStorage<Product[]>('cart', []);
  const { removeFromCart } = useContext(CartContext);

  const increaseCount = (productId: string) => {
    setProducts(
      products.map((product: Product) => {
        if (productId === product.id) {
          product.count += 1;
          return {
            ...product,
          };
        } else {
          return product;
        }
      }),
    );
  };

  const decreaseCount = (productId: string) => {
    setProducts(
      products.map((product: Product) => {
        if (productId === product.id) {
          product.count -= 1;
          return {
            ...product,
          };
        } else {
          return product;
        }
      }),
    );
  };

  const removeProduct = (productId: string) => {
    removeFromCart(productId);
    setProducts(
      products.filter((product: Product) => {
        if (product.id !== productId) {
          return product;
        }
      }),
    );
  };

  const findTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product: Product) => {
      totalPrice += product.count * Number(product.price);
    });

    return totalPrice;
  };

  return (
    <>
      <div
        className={classNames(modalStyle.blur, {
          [modalStyle.blur__visible]: isOpen === true,
        })}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={classNames(modalStyle.modal, {
          [modalStyle.modalOpen]: isOpen,
        })}
      >
        <div className={modalStyle.header}>
          <div className={modalStyle.modalTitle}>Your cart</div>

          <button
            className={modalStyle.closeModal}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>

        <div className={modalStyle.modalCards}>
          {products.length === 0 && (
            <div className={modalStyle.emptyCard}>
              Your cart is empty. Buy something first.
            </div>
          )}
          {products.map((product: Product) => (
            <ProductItem
              productItem={product}
              key={product.name}
              className={modalStyle.modalCard}
              onIncrese={increaseCount}
              onDecrease={decreaseCount}
              onRemove={removeProduct}
            />
          ))}
        </div>

        <div className={modalStyle.cardInfo}>
          <div className={modalStyle.totalPrice}>
            TOTAL PRICE:
            <span className={modalStyle.price}>{` ${findTotalPrice()}$`}</span>
          </div>

          <Button type="primary" size="small" text="Checkout" />
        </div>
      </div>
    </>
  );
};
