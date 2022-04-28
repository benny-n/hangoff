import { useQuery } from "react-query";

const fetchWord = async () => {
  const date = new Date();
  const dateSeed =
    date.getDate().toString() +
    date.getMonth().toString() +
    date.getFullYear().toString();
  (Math as any).seedrandom(dateSeed);
  return fetch("vocabulary.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      let words = Object.keys(json);
      return words[Math.floor(Math.random() * words.length)].toUpperCase();
    });
};

export const useFetchWord = (trigger: boolean) => {
  return useQuery("fetch-word", fetchWord, { enabled: trigger });
};
