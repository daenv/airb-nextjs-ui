'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import useRentModal from '@/app/hooks/useRentModal';

enum STEPT {
   CATEGORY = 0,
   LOCATION = 1,
   INFO = 2,
   IMAGES = 3,
   DESCRIPTION = 4,
   PRICE = 5,
}

const RentModal = () => {
    const router = useRouter()
    const rentModal = useRentModal()
   return <div>
    test
   </div>;
};

export default RentModal;
