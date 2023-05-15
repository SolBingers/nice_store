import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import auth from './AuthForm.module.scss';
import { Button } from '../Button';
import classNames from 'classnames';

type AuthFormProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: (email: string, password: string) => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({ isOpen, setIsOpen, onSubmit }) => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');


  const setErrorMessage = (error: string) => {
    setError(error);

    setTimeout(() => {
      setError('');
    }, 5000);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEmail('');
    setPassword('');
    setName('');
    setError('');
  };

  const handleSubmit = () => {
    if (!name
      || !password
      || (isRegistration && !email)) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    onSubmit(email, password);
  };

  return (
    <form
      className={classNames(auth.form, {
        [auth.formVisible]: isOpen === true,
      })}
    >
      <button
        className={auth.close}
        onClick={closeModal}
      />

      <h2 className={auth.heading}>
        {isRegistration ? 'Register' : 'Login'}
      </h2>

      {isRegistration && (
        <div className={auth.field}>
          <input
            className={auth.input}
            type="email"
            id="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>)
      }

      <div className={auth.field}>
        <input
          className={auth.input}
          placeholder='Username'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={auth.field}>
        <input
          className={auth.input}
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p>{error}</p>}

      <Button
        type='primary'
        text={isRegistration ? 'Create an account' : 'Log in'}
        size='large'
        additionalClass={auth.button}
        onClick={handleSubmit}
      />

      <span className={auth.span}>
        or
      </span>

      <Button
        type='secondary'
        text='Login with Google'
        size='large'
        additionalClass={auth.button}
      />

      <Button
        type='secondary'
        text='Login with GitHub'
        size='large'
        additionalClass={auth.button}
      />

      <a
        className={auth.link}
        onClick={() => setIsRegistration(!isRegistration)}>
        {isRegistration
          ? 'Have an account? Log in.'
          : 'Don’t have an account? Create it.'}
      </a>
    </form>
  );
};