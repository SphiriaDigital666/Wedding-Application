import db from '@/lib/db';

// export const getFriendsByUserId = async (userId: string) => {
//   // retrieve friends for current user
//   console.log('userid', userId);

//   const friendIds = await db.user.findMany({
//     where:{
//       id: userId,
//     },
//     select:{
//       friends: true
//     }
//   })

//   const friends = await Promise.all(
//     friendIds.map(async (friendId) => {
//       const friend = (await fetchRedis('get', `user:${friendId}`)) as string;
//       const parsedFriend = JSON.parse(friend) as User;
//       return parsedFriend;
//     })
//   );

//   return friends;
// };

// export const getFriendsByUserId = async (userId: string) => {
//   try {
//     // Retrieve friends for the current user
//     const user = await db.user.findFirst({
//       where: { id: userId },
//       include: { friends: true },
//     });

//     if (!user) {
//       throw new Error('User not found');
//     }

//     const friends = user.friends.map((friend) => {

//     })
//     return user.friends;
//   } catch (error) {
//     console.error('Error fetching friends:', error);
//     throw error;
//   }
// };

export const getFriendsByUserId = async (userId: string) => {
  try {
    // Retrieve friends for the current user
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { friends: true },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const friendsWithUserData = await Promise.all(
      user.friends.map(async (friend) => {
        // Retrieve user data for each friend
        const friendUserData = await db.user.findUnique({
          where: { id: friend.userId },
        });

        if (!friendUserData) {
          console.error(
            `User data not found for friend with ID: ${friend.friendId}`
          );
          // Handle the error or ignore as per your requirement
          return null;
        }

        // Combine user data with friend details
        return {
          friendDetails: friend,
          userData: friendUserData,
        };
      })
    );

    return friendsWithUserData.filter((friend) => friend !== null);
  } catch (error) {
    console.error('Error fetching friends:', error);
    throw error;
  }
};

