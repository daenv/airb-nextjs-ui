import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import prisma from '@/app/libs/prismadb';
export const getSession = async () => {
   return await getServerSession(authOptions);
};
const getCurrentUser = async () => {
   try {
      const session = await getSession();
      if (!session?.user?.email) return null;

      const currentUser = await prisma.user.findUnique({
         where: {
            email: session.user.email as string,
         },
      });
      if (!currentUser) return null;
      return {
         ...currentUser,
         createAt: currentUser.createdAt.toISOString(),
         updateAt: currentUser.updatedAt.toISOString(),
         emailValidation: currentUser.emailVerified?.toISOString() || null,
      };
   } catch (error) {
      return null;
   }
};

export default getCurrentUser;
