'use client'
import React, { Component } from 'react';
import { signOut, getAuth } from 'firebase/auth';
// import { useRouter } from 'next/router';

interface LogoutButtonProps {}

class LogoutButton extends Component<LogoutButtonProps> {
//   router = useRouter();
  auth = getAuth(); // Assuming you have Firebase initialized

  handleLogout = async () => {
    try {
      await signOut(this.auth);
      console.log('Signed out successfully!');
    //   this.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle errors with user messages (optional)
    }
  };

  render() {
    return (
      <button onClick={this.handleLogout}>
        Sign Out
      </button>
    );
  }
}

export default LogoutButton;