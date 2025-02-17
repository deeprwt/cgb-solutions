"use client";
import React, { ComponentType, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/database/firebase"; // Firebase instance
import { notifyError } from "@/utils/toast"; // Import notification functions

const SESSION_DURATION = 60 * 60 * 1000; // 60 seconds
const WARNING_DURATION = 30 * 1000; // Show warning 30 seconds before logout

const withAuth = (WrappedComponent: ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    // Store session state
    const sessionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const notificationShownRef = useRef(false); // Ensures only one notification is shown
    const [countdown, setCountdown] = useState(60); // Countdown in seconds

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/admin/login");
        return;
      }

      if (user) {
        // Countdown timer function
        const startCountdown = () => {
          let secondsRemaining = 60;
          const countdownInterval = setInterval(() => {
            secondsRemaining -= 1;
            setCountdown(secondsRemaining);
            if (secondsRemaining <= 0) {
              clearInterval(countdownInterval);
            }
          }, 1000);
        };

        // Function to show warning and log out
        const handleAutoLogout = () => {
          if (!notificationShownRef.current) {
            notifyError("You will be logged out in 30 seconds due to inactivity.");
            notificationShownRef.current = true; // Mark notification as shown
          }

          warningTimeoutRef.current = setTimeout(() => {
            signOut(auth);
            router.replace("/admin/login");
          }, WARNING_DURATION);
        };

        // Start the countdown & session timer
        startCountdown();
        sessionTimeoutRef.current = setTimeout(handleAutoLogout, SESSION_DURATION - WARNING_DURATION);

        // Reset session on user activity
        const resetSession = () => {
          if (sessionTimeoutRef.current) clearTimeout(sessionTimeoutRef.current);
          if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
          notificationShownRef.current = false; // Allow showing the warning again
          setCountdown(60); // Reset countdown
          sessionTimeoutRef.current = setTimeout(handleAutoLogout, SESSION_DURATION - WARNING_DURATION);
        };

        // Add event listeners
        window.addEventListener("mousemove", resetSession);
        window.addEventListener("keydown", resetSession);

        return () => {
          if (sessionTimeoutRef.current) clearTimeout(sessionTimeoutRef.current);
          if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
          window.removeEventListener("mousemove", resetSession);
          window.removeEventListener("keydown", resetSession);
        };
      }
    }, [user, loading, router]);

    if (!user) {
      return null; // Prevents rendering protected content before authentication check
    }

    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };

  return ComponentWithAuth;
};

export default withAuth;
