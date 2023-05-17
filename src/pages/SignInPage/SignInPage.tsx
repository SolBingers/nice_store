import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import SignInStyles from './SignInPage.module.scss';

export const SignInPage = () => {
  return (
    <div className={SignInStyles.container}>
      <SignIn 
        path='/sign-in'
        appearance={{
          elements: {
            footerActionText: SignInStyles.footerActionText,
            footerActionLink: SignInStyles.footerActionLink,
            card: SignInStyles.card,
            headerTitle: SignInStyles.header,
            headerSubtitle: SignInStyles.header,
            socialButtonsBlockButton: SignInStyles.socialButton,
            socialButtonsBlockButtonText: SignInStyles.header,
            dividerText: SignInStyles.header,
            dividerLine: SignInStyles.dividerLine,
            formFieldLabel: SignInStyles.header,
            formFieldInput: SignInStyles.input,
            formButtonPrimary: SignInStyles.formButton
          }
        }}
      />
    </div>
  );
};
