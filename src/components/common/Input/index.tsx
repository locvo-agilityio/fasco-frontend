import { Input as InputNextUI } from '@heroui/react';
import { ChangeEvent, ComponentProps, memo } from 'react';

interface TInputProps
  extends Omit<ComponentProps<typeof InputNextUI>, 'onChange'> {
  errorMessage?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  isInvalid = false,
  errorMessage = 'Default error',
  onChange,
  ...rest
}: TInputProps) => {
  const inputStyle = [
    'group-data-[has-value=true]:text-gray-500',
    'placeholder:text-gray-500',
    'text-gray-500',
    'text-base',
  ];
  const inputWrapperStyle = ['after:bg-transparent'];
  const labelStyle = ['text-gray-500', 'text-base'];

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <InputNextUI
        variant="underlined"
        classNames={{
          input: inputStyle,
          inputWrapper: inputWrapperStyle,
          label: labelStyle,
        }}
        onChange={handleChangeValue}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        {...rest}
      />
    </div>
  );
};

export default memo(Input);
