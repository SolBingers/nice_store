import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import checkout from './Checkout.module.scss';
import { SettingsInput } from '../../components/SettingsInput';
import { Button } from '../../components/Button';

interface FormInputs {
  firstName: string;
  sureName: string;
  country: string;
  city: string;
  address: string;
  apartment: number;
  cardNumber: number;
  expireDate: number;
}


export const CheckoutPage: React.FC = () => {
  const { handleSubmit, control, formState: {errors} } = useForm<FormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

  return (
    <div className={checkout.container}>

      <h2 className={checkout.title}>
        Checkout form
      </h2>

      <form
        className={checkout.form}
        onSubmit={handleSubmit(onSubmit)}
        method='POST'
      >
        <div className={checkout.form__personalName}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              <SettingsInput
                className={checkout.form__input}
                title='Name'
                placeholder='...'
                {...field}
              />}
          />

          <div className={checkout.form__inputError}>
            {(errors.firstName && 'Name is require')}
          </div>

          <Controller
            name="sureName"
            control={control}
            rules={{ required: true}}
            render={({ field }) =>
              <SettingsInput
                className={checkout.form__input}
                title='Surname'
                placeholder='...'
                {...field}
              />}
          />

          <div className={checkout.form__inputError}>
            {errors.sureName && 'Surename is require'}
          </div>
        </div>

        <div className={checkout.form__personalInfo}>
          <div>
            <Controller
              name="country"
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='Country'
                  placeholder="..."
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {errors.country && 'Country is require'}
            </div>

            <Controller
              name="city"
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='City'
                  placeholder='...'
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {errors.city && 'City is require'}
            </div>
          </div>

          <div>
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='Address'
                  placeholder='...'
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {errors.address && 'Address is require'}
            </div>

            <Controller
              name="apartment"
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='Apartment'
                  placeholder='...'
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {errors.apartment && 'Apartment is require'}
            </div>
          </div>
        </div>

        <div className={checkout.form__personalCard}>
          <Controller
            name="cardNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              <SettingsInput
                className={checkout.form__input}
                title='Card Number'
                placeholder='0000 0000 0000 0000'
                {...field}
              />}
          />

          <div className={checkout.form__inputError}>
            {errors.cardNumber && 'Card number is require'}
          </div>

          <Controller
            name="expireDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              <SettingsInput
                className={checkout.form__input}
                title='Expire date'
                placeholder='MM/YY'
                {...field}
              />}
          />

          <div className={checkout.form__inputError}>
            {errors.expireDate && 'Expire date is require'}
          </div>
        </div>

        <Button
          text='Checkout'
          size='extraLarge'
          type='primary'
        />
      </form>
    </div>
  );
};