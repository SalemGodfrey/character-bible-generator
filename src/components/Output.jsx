import React, { useEffect } from "react";
import { generateBible } from "../api/gemini.js";
import IdentityStyles from "../styles/Identity.module.css";
import ReactMarkdown from "react-markdown";
export default function Output({
  bible,
  setBible,
  loading,
  setLoading,
  firstName,
  lastName,
  gender,
  nationality,
  hairColor,
  eyeColor,
  height,
  age,
  role,
  trauma,
  archetype,
  genre,
  valid,
  setValid,
}) {
  useEffect(
    function () {
  
      if (
        age === "" ||
        archetype === "" ||
        genre === "" ||
        firstName === "" ||
        lastName === "" ||
        nationality === "" ||
        gender === "" ||
        age === "none" ||
        archetype === "none" ||
        genre === "none" ||
        firstName === "none" ||
        lastName === "none" ||
        nationality === "none" ||
        gender === "none"
      ) {
        setValid(true);
      } else {
        setValid(false);    
      }
    },
    [age, archetype, genre, firstName, lastName, nationality, gender],
  );

  async function handleGenerate() {
      const prompt = `You are a narrative design engine. Output ONLY the character bible. No preamble, no closing remarks, no meta-commentary. Begin directly with the character's name as a heading.

    Character data:
    Name: ${firstName} ${lastName}
    Nationality: ${nationality}
    Gender: ${gender}
    Age: ${age}
    Hair Color: ${hairColor}
    Eye Color: ${eyeColor}
    Height: ${height}
    Archetype: ${archetype}
    Genre of the story: ${genre}
    Trauma: ${trauma}
    Role in story: ${role}

    Output the following sections in order:
    ## Psychological Profile
    ## Appearance
    ## Core Motivation & Fear
    ## Backstory
    ## Personality Traits
    ## Signature Quote
    ## A secret that recontextualizes everything about them

    Write with the tone of a dark literary author. Be specific, be brutal, be human.`;
      console.log("Generating...");
      console.log("Prompt:", prompt);
      setLoading(true);
      try {
        const text = await generateBible(prompt);
        console.log("Result:", text);
        setBible(text);
      } catch (err) {
        console.error("Error:", err);
      }
      console.log(valid);
      setLoading(false);
  }

  return (
    <div>
      {loading && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
            top: "0",
            left: "0",
            backgroundColor: "#000000a7",
          }}
        >
          <div className={IdentityStyles["loader"]}></div>
        </div>
      )}
      <button disabled={valid}  onClick={handleGenerate} className={IdentityStyles["generateButton"]}>
        {loading ? "FORGING..." : "FORGE THE CHARACTER"}
      </button>
      {bible && (
        <div
          style={{
            backgroundColor: "#0e0e12",
            color: "#e8d5b0",
            padding: "1rem",
            marginTop: "2rem",
            border: "1px solid #262424",
            fontFamily: "font-family: 'Crimson Pro', serif",
            listStyle: "inside",
          }}
          className={IdentityStyles["bible"]}
        >
          <ReactMarkdown>{bible}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
