export function validateEmail(email: string) {
  // eslint-disable-next-line no-useless-escape
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return pattern.test(email);
}

export function validatePassword (password: string) {
  return password.length > 5;
}

export function validateUsername (username: string) {
  const pattern = /^(?=[a-zA-Z0-9._]{4,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  return pattern.test(username);
}
