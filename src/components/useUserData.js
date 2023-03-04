import { useState, useEffect } from "react";

export const useUserData = () => {
  const [user, setUser] = useState("Olaf-Tarkowski");
  const [choice, setChoice] = useState("Olaf-Tarkowski");
  const [error, setError] = useState("");

  const changeUser = (newUser) => {
    setChoice(newUser);
  };

  useEffect(() => {
    const fetchUserHandler = async () => {
      setError("");
      try {
        const response = await fetch(`https://api.github.com/users/${choice}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const newUser = await response.json();
        setUser(newUser);
      } catch (error) {
        setError("No results");
      }
    };
    setTimeout(fetchUserHandler);
  }, [choice]);

  useEffect(() => {
    const searchHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!searchHistory.includes(user.login)) {
      searchHistory.push(user.login);
    }
    setTimeout(() => {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }, 1000);
  }, [user]);

  const searchHistory = Array.from(
    new Set(JSON.parse(localStorage.getItem("searchHistory") || "[]"))
  );

  return { changeUser, user, searchHistory, error };
};
