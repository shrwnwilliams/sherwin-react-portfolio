import React from "react";
import Face from "../components/Face";
import DnDCard from "../components/DnDCard"
import DnDInfo from "../info/favoriteChar.json"

function About() {
  return (
    <div>
      <Face />
      <section className="text-center">
        <div className="border-bottom border-info">
          <h2 className="mb-3">About Me</h2>
        </div>
        <p className="pt-3">
          {" "}
          Hello there. My name, as you might have guess from the giant letters
          ever-present at the top of the website, is Sherwin James Williams. I
          was born in Brooklyn, New York and grew up in the harsh and brutal
          winters of Syracuse, New York. After graduating high school, I moved
          to Buffalo, New York to attend school at Buffalo State University.
          Shortly after receiving my Bachelor's Degree in Writing, I decided to
          move to Atlanta, GA where I now, after studying at Georgia Tech,
          pursue a career as a web developer. If you like what you see, please
          feel free to reach out to me in any of the methods provided!
        </p>
      </section>
      <section className="text-center">
      <div className="border-bottom border-info">
          <h2 className="mb-3">More About Me</h2>
        </div>
        <DnDCard name={DnDInfo[0].name} img={DnDInfo[0].img}/>
      </section>
    </div>
  );
}

export default About;
