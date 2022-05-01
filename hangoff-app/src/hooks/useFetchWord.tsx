import { useQuery } from "react-query";
import seedrandom from "seedrandom";

const fetchWord = async () => {
  const date = new Date();
  const dateSeed =
    date.getDate().toString() +
    date.getMonth().toString() +
    date.getFullYear().toString();
  var rng = seedrandom(dateSeed);
  return fetch("vocabulary.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      let words = Object.keys(json);
      return words[Math.floor(rng() * words.length)].toUpperCase();
    });
};

export const useFetchWord = (trigger: boolean) => {
  return useQuery("fetch-word", fetchWord, { enabled: trigger });
};
