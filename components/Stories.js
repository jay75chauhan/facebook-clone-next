import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "jay",
    src: "https://images.unsplash.com/photo-1596230529625-7ee10f7b09b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5ldmVyJTIwZ2l2ZSUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profiles: "https://avatars.githubusercontent.com/u/66429052?v=4",
  },
  {
    name: "Elone Musk",
    src: "https://links.papareact.com/4zn",
    profiles: "https://links.papareact.com/kxk",
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
    <div className="flex justify-center space-x-3 ">
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
