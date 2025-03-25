export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Please enter at least 8 characters for password',
  REQUIRE_UPPER_CASE: 'Upper case is required',
  REQUIRE_LOWER_CASE: 'Lower case is required',
  REQUIRE_NUMBER: 'Number is required',
  REQUIRE_SPECIAL_CHARACTER: 'Special character is required',
  INVALID_PHONE_NUMBER: 'Please enter a valid phone number',
  PASSWORD_NOT_MATCH: 'Password does not match',
  UNKNOWN_ERROR: 'Something went wrong',
  EMAIL_PASSWORD_INVALID: 'Invalid email or password',
  SIGN_IN_ERROR: 'Sign in failed',
  EMPTY_CART: 'No products in the cart',
};

export const SUCCESS_MESSAGES = {
  SIGN_UP_SUCCESS: 'Sign up successful',
  SIGN_IN_SUCCESS: 'Sign in successful',
  ADD_CART_SUCCESS: 'Added to cart successfully',
  CHECKOUT_SUCCESS: 'Checkout successful',
};
