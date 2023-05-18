import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import SignInStyles from './SignInPage.module.scss';

export const SignInPage = () => {
  return (
    <div className={SignInStyles.container}>
      {/* <SignIn
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
      /> */}
      <SignInButton mode='modal' />
    </div>
  );
};
