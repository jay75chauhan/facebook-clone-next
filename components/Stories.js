import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "jay",
    src: "https://links.papareact.com/4zn",
    profiles: "https://links.papareact.com/kxk",
  },
  {
    name: "Elone Musk",
    src: "https://links.papareact.com/4zn",
    profiles: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profiles: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zukerberg",
    src: "https://links.papareact.com/xql",
    profiles: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profiles: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profiles}
        />
      ))}
    </div>
  );
}

export default Stories;
