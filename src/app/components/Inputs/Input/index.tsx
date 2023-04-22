'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
   id: string;
   label: string;
   type?: string;
   disabled?: boolean;
   formatPrice?: boolean;
   required?: boolean;
   register: UseFormRegister<FieldValues>;
   error: FieldErrors;
}

const Input: React.FC<InputProps> = ({
   id,
   label,
   type = 'text',
   disabled,
   formatPrice,
   required,
   register,
   error,
}) => {
    return (
        <div className='w-full relative'>
            {formatPrice && (
                <BiDollar size={24} className='text-neutral-700 absolute top-5 left-2'/>
            )}
       </div>
   )
};

export default Input;
