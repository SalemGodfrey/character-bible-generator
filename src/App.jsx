import { useState } from "react";
import "./styles/App.css";
import Identity from "./components/Identity.jsx";
import Appearance from "./components/Appearance.jsx";
import Story from "./components/Story.jsx";
import Output from "./components/Output.jsx";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [archetypeSystem, setArchetypeSystem] = useState("");
  const [trauma, setTrauma] = useState("");
  const [role, setRole] = useState("");
  const [bible, setBible] = useState("");
  const [loading, setLoading] = useState(false);
  const [archetype, setArchetype] = useState("");
  const [genre, setGenre] = useState("");
  const [valid, setValid] = useState(true);

  return (
    <div className="App">
      <div className="corner corner-tl"></div>
      <div className="corner corner-tr"></div>{" "}
      <div className="container">
        <p className="crimson-pro subheading">narrative design tool</p>
        <h1>Character Bible Generator</h1>
      </div>
      <p className="crimson-pro slogan">Give them a soul. Give them a wound. Give them a name.</p>
      <div className="container">
        <Identity
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          gender={gender}
          setGender={setGender}
          nationality={nationality}
          setNationality={setNationality}
        />
        <Appearance
      
          age={age}
          setAge={setAge}
        />
        <Story
          archetypeSystem={archetypeSystem}
          setArchetypeSystem={setArchetypeSystem}
          trauma={trauma}
          setTrauma={setTrauma}
          role={role}
          setRole={setRole}
          archetype={archetype}
          setArchetype={setArchetype}
          genre={genre}
          setGenre={setGenre}
        />
        <Output
          bible={bible}
          setBible={setBible}
          loading={loading}
          setLoading={setLoading}
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          nationality={nationality}
          hairColor={hairColor}
          eyeColor={eyeColor}
          height={height}
          age={age}
          trauma={trauma}
          role={role}
          archetype={archetype}
          genre={genre}
          valid={valid}
          setValid={setValid}
        />
      </div>
      <div className="corner corner-bl"></div>
      <div className="corner corner-br"></div>
    </div>
  );
}

export default App;
