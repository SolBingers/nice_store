import React from 'react';
import modal from './CheckoutModal.module.scss';
import success from '../../images/success-image.svg';
import classNames from 'classnames';

interface Props {
  isOpen: boolean
}

export const CheckoutModal: React.FC<Props> = ({ isOpen }) => (
  <>
    <div
      className={classNames(modal.blur, {
        [modal.blur__visible]: isOpen === true,
      })}
    />
    <div
      className={classNames(modal.modal, {
        [modal.modalOpen]: isOpen,
      })}
    >
      <div className={modal.header}>
        <h2>Success</h2>
        
        <img src={success} />

        <p>Your order will be delivered as soon as possible!</p>
      </div>
    </div>
  </>
);