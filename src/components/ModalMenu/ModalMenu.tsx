import React, {Dispatch,  SetStateAction} from 'react';
import modalStyle from './ModalMenu.module.scss';
import classNames from 'classnames';
import photo from '../../images/categories/categoryPhones.png';
import { ProductItem } from '../ProductItem';
import { Button } from '../Button';

type Props = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}

export const ModalMenu:React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const products = [
    {
      title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
      image: photo,
      count: 1,
      price: 99,
    },
    {
      title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
      image: photo,
      count: 1,
      price: 99,
    },
  ];

  const findTotalPrice = () => {
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice += product.count * product.price;
    });

    return totalPrice;
  };


  return (
    <>
      <div 
        className={classNames(modalStyle.blur,{
          [modalStyle.blur__visible]: isOpen === true,
        })}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={classNames(
          modalStyle.modal,{
            [modalStyle.modalOpen]: isOpen,
          }
        )}
      >
        <div className={modalStyle.modalTitle}>
          Favorites
        </div>

        <button
          className={modalStyle.closeModal}
          onClick={() => {setIsOpen(false);}}
        />

        <div className={modalStyle.modalCards}>
          {products.map(product => (
            <ProductItem 
              productItem={product} 
              key={product.title}
              className={modalStyle.modalCard}
            />
          ))}
        </div>

        <div className={modalStyle.cardInfo}>
          <div className={modalStyle.totalPrice}>
            TOTAL PRICE: 
            <span className={modalStyle.price}>{` ${findTotalPrice()}$`}</span>
          </div>

          <Button type='primary' size='small' text='Checkout'/>
        </div>
          
      </div>
    </>
  );
};