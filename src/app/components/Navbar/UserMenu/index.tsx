'use client';
import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { SafeUser } from '@/app/types';

interface UserMenuProps {
   currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
   const loginModal = useLoginModal();
   const registerModal = useRegisterModal();
   const [isOpen, setIsOpen] = useState(false);
   const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value);
   }, []);
   /* const onRent = useCallback(() => {
      if(!currentUser)
   },[]) */

   return (
      <div className="relative">
         <div className="flex flex-row items-center gap-3">
            <div
               onClick={toggleOpen}
               className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neural-100 cursor-pointer"
            >
               AirB Your Home
            </div>
            <div
               onClick={toggleOpen}
               className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
               <AiOutlineMenu />
               <div className="hidden md:block">
                  <Avatar />
               </div>
            </div>
         </div>
         {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] bg-white md:w-3/4 overflow-hidden right-0 top-12 text-sm ">
               <div className="flex flex-col cursor-pointer">
                  {currentUser ? (
                     <>
                        <MenuItem label="My Trip" onClick={() => {}} />
                        <MenuItem label="My Trip" onClick={() => {}} />
                        <MenuItem label="My Trip" onClick={() => {}} />
                        <MenuItem label="My Trip" onClick={() => {}} />
                     </>
                  ) : (
                     <>
                        <div className="border-b-[1px]">
                           <MenuItem
                              onClick={() => {
                                 loginModal.onOpen();
                              }}
                              label="Login"
                           />
                           <MenuItem
                              onClick={() => {
                                 registerModal.onOpen();
                              }}
                              label="Sign up"
                           />
                        </div>
                        <div>
                           <MenuItem
                              onClick={() => {}}
                              label="AirB Your Home"
                           />
                           <MenuItem onClick={() => {}} label="Help" />
                        </div>
                     </>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default UserMenu;
