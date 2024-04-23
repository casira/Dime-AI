import { Tutor } from "@/interfaces/tutor";

export const tutors: Tutor[] = [
  {
    img: "Pia.jpg",
    name: "Pía",
    level: "beginner 1",
    topics: ["movies", "music", "animals", "school", "travel"],
    funFact: "Pía has 8 pets! Ask her about each one 😺🐶🐤🐰",
  },
  {
    img: "Roldan.jpg",
    name: "Roldán",
    level: "beginner 2",
    topics: ["sports", "family", "hobbies", "food", "TV"],
    funFact: "Roldán loves gardening! Ask him what he's growing 🌱🍅🥕",
  },
  {
    img: "Brisa.jpg",
    name: "Brisa",
    level: "intermediate",
    topics: ["news", "games", "science", "art", "friends"],
    funFact: "Brisa is in a band! Ask what instrument she plays 🎤🎵🎺🎸",
  },
  {
    img: "Olinda.jpg",
    name: "Olinda",
    level: "advanced",
    topics: ["work", "ideas", "technology", "culture", "dreams"],
    funFact: "Olinda is a triplet! Ask her about her siblings.",
  },
];

//need to map each tutor to a Card layout
