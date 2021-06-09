import { useState, useEffect } from "react";
import firebase from "firebase/app";

export const useUserGroups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
    const loadGroups = async () => {
      setIsLoading(true);
      const user = firebase.auth().currentUser;

      if (!user) {
        setIsLoading(false);
        setUserGroups([]);
        return;
      }

      const response = await fetch(`/users/${user.uid}/groups`, {
        headers: {
          AuthToken: await user.getIdToken(),
        },
      });
      const res = await response.json();
      setUserGroups(res);
      setIsLoading(false);
    };

    loadGroups();
  }, []);

  return { isLoading, userGroups };
};
