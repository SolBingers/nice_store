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
  const {
    handleSubmit,
    control,
    formState: {errors, isValid },
    reset,
  } = useForm<FormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    alert(JSON.stringify(data));
    reset();
  };

  const {
    firstName,
    sureName,
    country,
    city,
    address,
    apartment,
    expireDate,
    cardNumber
  } = errors;

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
            rules={{
              required: true,
              pattern: /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,20}$/,
            }}
            render={({ field }) =>
              <SettingsInput
                className={checkout.form__input}
                title='Name'
                placeholder='...'
                {...field}
              />}
          />

          <div className={checkout.form__inputError}>
            {firstName?.type === 'required' &&
            <p>This field is required</p>}

            {firstName?.type === 'pattern' &&
              <p>Alphabetical characters only</p>
            }
          </div>


          <Controller
            name="sureName"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,20}$/,
                message: ''
              }
            }}
            render={({ field }) =>
              <SettingsInput
                className={checkout.form__input}
                title='Surname'
                placeholder='...'
                {...field}
              />}
          />

          <div className={checkout.form__inputError}>
            {sureName?.type === 'required'
              &&
            <p>This field is required</p>}

            {sureName?.type === 'pattern' &&
              <p>Alphabetical characters only</p>
            }
          </div>
        </div>

        <div className={checkout.form__personalInfo}>
          <div>
            <Controller
              name="country"
              control={control}
              rules={{
                required: true,
                pattern: /^([^0-9]*)$/,
              }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='Country'
                  placeholder="..."
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {/* {country?.type === 'required' &&
              <p>This field is required</p>} */}

              {country?.type === 'pattern' &&
                <p>Alphabetical characters only</p>}
            </div>

            <Controller
              name="city"
              control={control}
              rules={{
                required: true,
                pattern: /^([^0-9]*)$/,
              }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='City'
                  placeholder='...'
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {city?.type === 'required' &&
              <p>This field is required</p>}

              {city?.type === 'pattern' &&
                <p>Alphabet characters only</p>
              }
            </div>
          </div>

          <div>
            <Controller
              name="address"
              control={control}
              rules={{
                required: true,
                pattern: /^[#.0-9a-zA-Z\s,-]+$/,
              }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='Address'
                  placeholder='...'
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {address?.type === 'required' &&
              <p>This field is required</p>}

              {address?.type === 'pattern' &&
                <p>Uncorect characters &&#10088;%#$</p>
              }
            </div>

            <Controller
              name="apartment"
              control={control}
              rules={{
                required: true,
                pattern: /[0-9]/,
              }}
              render={({ field }) =>
                <SettingsInput
                  className={checkout.form__input}
                  title='Apartment'
                  placeholder='...'
                  {...field}
                />}
            />

            <div className={checkout.form__inputError}>
              {apartment?.type === 'required' &&
              <p>This field is required</p>}

              {apartment?.type === 'pattern' &&
                <p>Digits characters only</p>
              }
            </div>
          </div>
        </div>

        <div className={checkout.form__personalCard}>
          <Controller
            name="cardNumber"
            control={control}
            rules={{
              required: true,
              // minLength: 19,
              // maxLength: 19,
              pattern: /[0-9]/,

            }}
            render={({ field }) =>
              <SettingsInput
                className={checkout.form__input}
                title='Card Number'
                placeholder='0000 0000 0000 0000'
                {...field}
              />}
          />

          <div className={checkout.form__inputError}>
            {cardNumber?.type === 'required' &&
            <p>This field is required</p>}

            {cardNumber?.type === 'pattern' &&
              <p>Digits characters only</p>
            }

            {}
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
            {expireDate?.type === 'required' &&
            <p>This field is required</p>}

            {expireDate?.type === 'pattern' &&
              <p>Digits characters only</p>
            }
          </div>
        </div>

        <Button
          text='Checkout'
          size='extraLarge'
          type='primary'
          disabled={!isValid}
        />
      </form>
    </div>
  );
};