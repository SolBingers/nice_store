import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { SettingsInput } from '../../components/SettingsInput';
import { Button } from '../../components/Button';
import ReactInputMask from 'react-input-mask';

import form from './FormCheckout.module.scss';
import { FormInputs } from '../../types/FormInputs';

interface Props {
  onClear: () => void;
  sendOrder: (address: string) => void;
}

export const FormCheckout: React.FC<Props> = ({ sendOrder }) => {
  const {
    handleSubmit,
    control,
    formState: {errors, isValid},
  } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    const {address, apartment, country, city} = data;
    const addressString = [address, apartment, city, country].join(', ');
    sendOrder(addressString);
  };

  const {
    firstName,
    sureName,
    country,
    city,
    address,
    apartment,
    expireDate,
    cardNumber,
  } = errors;

  return (
    <div className={form.container}>
      <h2 className={form.title}>Checkout form</h2>

      <div className={form.form}>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className={form.form__personalInfo}>
            <div className={form.form__controller}>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,20}$/,
                }}
                render={({ field }) => (
                  <SettingsInput
                    className={form.form__input}
                    title="Name"
                    placeholder="..."
                    {...field}
                  />
                )}
              />

              <div className={form.form__inputError}>
                {firstName?.type === 'required' && (
                  <p>This field is required</p>
                )}

                {firstName?.type === 'pattern' && (
                  <p>Alphabetical characters only</p>
                )}
              </div>
            </div>

            <div className={form.form__controller}>
              <Controller
                name="sureName"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,20}$/,
                }}
                render={({ field }) => (
                  <SettingsInput
                    className={form.form__input}
                    title="Surname"
                    placeholder="..."
                    {...field}
                  />
                )}
              />

              <div className={form.form__inputError}>
                {sureName?.type === 'required' && <p>This field is required</p>}

                {sureName?.type === 'pattern' && (
                  <p>Alphabetical characters only</p>
                )}
              </div>
            </div>
          </div>

          <div className={form.form__personalInfo_address}>
            <div className={form.infoConteiner}>
              <div className={form.form__controller}>
                <Controller
                  name="country"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^([^0-9]*)$/,
                  }}
                  render={({ field }) => (
                    <SettingsInput
                      className={form.form__input}
                      title='Country'
                      placeholder='...'
                      {...field}
                    />
                  )}
                />

                <div className={form.form__inputError}>
                  {country?.type === 'required' && (
                    <p>This field is required</p>
                  )}

                  {country?.type === 'pattern' && (
                    <p>Alphabetical characters only</p>
                  )}
                </div>
              </div>

              <div className={form.form__controller}>
                <Controller
                  name="city"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^([^0-9]*)$/,
                  }}
                  render={({ field }) => (
                    <SettingsInput
                      className={form.form__input}
                      title="City"
                      placeholder="..."
                      {...field}
                    />
                  )}
                />

                <div className={form.form__inputError}>
                  {city?.type === 'required' && <p>This field is required</p>}

                  {city?.type === 'pattern' && <p>Alphabet characters only</p>}
                </div>
              </div>
            </div>

            <div className={form.infoConteiner}>
              <div className={form.form__controller}>
                <Controller
                  name="address"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[a-zA-Z0-9а-яА-ЯЁёІіЇїЄє\s.,-]+$/,
                  }}
                  render={({ field }) => (
                    <SettingsInput
                      className={form.form__input}
                      title="Address"
                      placeholder="..."
                      {...field}
                    />
                  )}
                />

                <div className={form.form__inputError}>
                  {address?.type === 'required' && (
                    <p>This field is required</p>
                  )}

                  {address?.type === 'pattern' && (
                    <p>Uncorect characters &&#10088;%#$</p>
                  )}
                </div>
              </div>

              <div className={form.form__controller}>
                <Controller
                  name="apartment"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /[0-9]/,
                  }}
                  render={({ field }) => (
                    <SettingsInput
                      className={form.form__input}
                      title="Apartment"
                      placeholder="..."
                      {...field}
                    />
                  )}
                />

                <div className={form.form__inputError}>
                  {apartment?.type === 'required' && (
                    <p>This field is required</p>
                  )}

                  {apartment?.type === 'pattern' && (
                    <p>Digits characters only</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={form.form__personalInfo}>
            <div className={form.form__controller}>
              <Controller
                name="cardNumber"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9\s]+$/,
                }}
                render={({ field }) => (
                  <div>
                    <p className={form.maskTitle}>
                      Card number
                    </p>
                    <ReactInputMask
                      className={form.cardMask}
                      placeholder='0000 0000 0000 0000'
                      {...field}
                      mask="9999 9999 9999 9999"
                    />
                  </div>
                )}
              />

              <div className={form.form__inputError}>
                {cardNumber?.type === 'required' &&
                <p>This field is required</p>}
              </div>
            </div>

            <div className={form.form__controller}>
              <Controller
                name="expireDate"
                control={control}
                rules={{ required: true,
                  pattern: /^\d{2}\/\d{2}$/,
                }}
                render={({ field }) =>
                  <div>
                    <p className={form.maskTitle}>
                      Card number
                    </p>
                    <ReactInputMask
                      className={form.cardMask}
                      placeholder='MM/YY'
                      {...field}
                      mask="99/99"
                    />
                  </div>
                }
              />

              <div className={form.form__inputError}>
                {expireDate?.type === 'required' &&
                <p>This field is required</p>}
              </div>
            </div>
          </div>

          <div className={form.form__button}>
            <Button
              text="Checkout"
              size="extraLarge"
              type="primary"
              disabled={!isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
