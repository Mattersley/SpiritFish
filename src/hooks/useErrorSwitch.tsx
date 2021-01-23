interface ErrorTypes {
    EMAIL_EXISTS: () => void,
    EMAIL_NOT_FOUND: () => void,
    EXPIRED_OOB_CODE: () => void,
    INVALID_EMAIL: () => void,
    INVALID_ID_TOKEN: () => void,
    INVALID_OOB_CODE: () => void,
    INVALID_PASSWORD: () => void,
    MISSING_PASSWORD: () => void,
    MISSING_EMAIL: () => void,
    OPERATION_NOT_ALLOWED: () => void,
    RESET_PASSWORD_EXCEED_LIMIT: () => void,
    TOO_MANY_ATTEMPTS_TRY_LATER: () => void,
    'auth/user-not-found': () => void,
    default: () => void,
}

const useErrorSwitch = (error) => {
  let errorMessage: string | null = null;
  if (error) {
    const errors: ErrorTypes = {
      EMAIL_EXISTS: () => {
        errorMessage = 'You have already registered. Please log in';
      },
      EMAIL_NOT_FOUND: () => {
        errorMessage = 'Email not found';
      },
      EXPIRED_OOB_CODE: () => {
        errorMessage = 'your code has expired.';
      },
      INVALID_EMAIL: () => {
        errorMessage = 'You have entered an invalid email address';
      },
      INVALID_ID_TOKEN: () => {
        errorMessage = 'Invalid ID token. Please log out and try again.';
      },
      INVALID_OOB_CODE: () => {
        errorMessage = 'your code is invalid or has already been used.';
      },
      INVALID_PASSWORD: () => {
        errorMessage = 'Incorrect Password';
      },
      MISSING_PASSWORD: () => {
        errorMessage = 'Please enter a password and try again';
      },
      MISSING_EMAIL: () => {
        errorMessage = 'Please enter your email address and try again';
      },
      OPERATION_NOT_ALLOWED: () => {
        errorMessage = 'password sign-in is disabled. Please contact us, or';
      },
      RESET_PASSWORD_EXCEED_LIMIT: () => {
        errorMessage = 'You have attempted to reset your password too many times. Please contact us via support';
      },
      TOO_MANY_ATTEMPTS_TRY_LATER: () => {
        errorMessage = 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
      },
      'auth/user-not-found': () => {
        errorMessage = 'An account with the details you have entered does not exist. Please try a different email address';
      },
      default: () => {
        errorMessage = error.message;
      },
    };
    (errors[`"${error.code}"`] || errors[error.message] || errors.default)();
  }
  return errorMessage;
};

export default useErrorSwitch;
