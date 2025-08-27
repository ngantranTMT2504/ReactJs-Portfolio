import React from "react";
import './Languages.css';

const Languages = () => {
  const data = [
    {
      title: "Languages",
      contents: ["Java", "JavaScript", "Python", "C#"],
    },
    {
      title: "Frameworks",
      contents: ["VueJs", "ReactJs", "SpringBoot", ".Net"],
    },
    {
      title: "Database",
      contents: ["SQl server", "PostgreSQl", "FireBase"],
    },
    {
      title: "Cloud",
      contents: ["AWS"],
    }
  ]

  return (
    <section id="languages" data-aos="fade">
      {
        data.map(item => {
            return <div className="languages-box" key={item.title}>
                <h3>{item.title}</h3>
                <ul>
                    {
                        item.contents.map(content => {
                            return <li key={content}>{content}</li>
                        })
                    }
                </ul>
            </div> 
        })
      }
    </section>
  );
};

export default Languages;
