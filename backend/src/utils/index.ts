import * as bcrypt from 'bcrypt';

const SALT_ROUNDS: number = 10;

export const hashPlainTextPassword = (plainTextPassword: string) => {
  return bcrypt.hash(plainTextPassword, SALT_ROUNDS);
};

export const transformObject = (element: any) => {
  if (Array.isArray(element)) return element.map(decodeURIComponent);

  return Object.entries(element).reduce((object, [key, value]) => {
    if (typeof value === 'string') {
      object[key] = decodeURIComponent(value);
      return object;
    }

    if (Array.isArray(value)) {
      object[key] = transformObject(value);
      return object;
    }

    object[key] = value;
    return object;
  }, {});
};

export const shuffleArray = <T>(arr: T[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
