import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, doc, deleteDoc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import { PROFILE_PICTURE_DEFAULT_URL } from '../constants/constants';

// collection ref
const usersColRef = collection(db, 'users');

// get 1 user from db
export const getUser = async (uid) => {
  try {
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    throw new Error("User don't exist in collection");
  } catch (error) {
    throw new Error(error);
  }
};

// get collection data
export const getUsers = async () => {
  try {
    onSnapshot(usersColRef, (snapshot) => {
      const users = snapshot.docs.map((snapshotDoc) => snapshotDoc.data());
      return users;
    });
  } catch (error) {
    console.error(error);
  }
};

// create a user
export const createUser = async (user) => {
  // const userDoc = await getUser(user.uid);

  // if (userDoc) {
  //   return;
  // }

  const userToSave = {
    displayName: user?.displayName || null,
    firstName: user?.firstName || null,
    lastName: user?.lastName || null,
    dateOfBirth: user?.dateOfBirth || null,
    gender: user?.gender || null,
    email: user?.email || null,
    profilePictureURL: PROFILE_PICTURE_DEFAULT_URL,
  };

  if (user.email && user.password) {
    try {
      const userData = await createUserWithEmailAndPassword(auth, user.email, user.password);

      await setDoc(doc(db, 'users', userData.user.uid), userToSave);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    // this is for github and google signin, so user is created in collection
    console.log('user in else: ', { ...user, profilePictureURL: PROFILE_PICTURE_DEFAULT_URL });
    await setDoc(doc(db, 'users', user.uid), {
      ...user,
      profilePictureURL: PROFILE_PICTURE_DEFAULT_URL,
    });
  }
};

// get collection data
export const addUser = async (newUser) => {
  try {
    const addedUser = await addDoc(usersColRef, newUser);
    console.log(addedUser);
    return addedUser;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// get collection data
export const deleteUser = async (userID) => {
  const docRef = doc(db, 'users', userID.value);
  try {
    const deletedUser = await deleteDoc(docRef);
    console.log(deletedUser);
    //   return deletedPost;
  } catch (error) {
    console.log(error);
  }
};
