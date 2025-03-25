import { registerOTel } from '@vercel/otel';

export function register() {
  registerOTel('fasco');
}

export function onRequestError(error: Error) {
  console.error('onRequestError:', error);
}
