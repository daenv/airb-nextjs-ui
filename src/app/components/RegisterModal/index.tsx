'use client';
import React, { useCallback, useState } from 'react';
import useRegisterModal from '@/app/hooks/useRegisterModal';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Modal from '../Modal';
import Heading from '../Heading';
import Input from '../Inputs/Input';
const RegisterModal = () => {
   const registerModal = useRegisterModal();
   const [isLoading, setIsLoading] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         name: '',
         email: '',
         password: '',
      },
   });
   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      axios
         .post('/api/register', data)
         .then(() => {
            registerModal.onClose();
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const onToggle = useCallback(() => {
      registerModal.onClose();
   }, [registerModal]);
   const bodyContent = (
      <div className="flex flex-col gap-4">
         <Heading title="test" subtitle="1212" />
         <Input
            id="email"
            label="name"
            disabled={isLoading}
            register={register}
            error={errors}
            required
         />
      </div>
   );
   return (
      <Modal
         disabled={isLoading}
         isOpen={registerModal.isOpen}
         title="Register"
         actionLabel="Contiune"
         onClose={registerModal.onClose}
         onSubmit={handleSubmit(onSubmit)}
         body={bodyContent}
      />
   );
};

export default RegisterModal;
