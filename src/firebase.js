import { createUserWithEmailAndPassword } from 'firebase/auth';

// Example function to create a new user
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Successfully created new user
    console.log('User registered:', userCredential.user);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('This email is already in use. Please try logging in or use a different email.');
      // Optionally, redirect the user to the login page or prompt to reset the password
    } else {
      console.error('Error registering user:', error.message);
    }
  }
};
