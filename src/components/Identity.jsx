import React, { useState } from "react";
import IdentityStyles from "../styles/Identity.module.css";

export default function Identity({ firstName, setFirstName, lastName, setLastName, gender, setGender, nationality, setNationality }) {
  let [isNamerValid, setIsNamerValid] = useState(false);
  function generateName() {
    if (gender === "" || gender === "none" || nationality === "" || nationality === "none") {
      setIsNamerValid((isNamerValid = true));
    } else {
      async function generateName(nationality, gender) {
        let data = await import(`../api/${nationality}.json`);
        let names = gender === "male" ? data.male : data.female;
        setFirstName(firstName=(names.first[Math.floor(Math.random() * names.first.length)]))
        setLastName(lastName=(names.last[Math.floor(Math.random() * names.last.length)]) )
      }
      generateName(nationality, gender);
    }
  }
  return (
    <div>
      <div className={IdentityStyles["section-label"]}>identity</div>
      {isNamerValid && <p style={{ color: "#800C0C", textAlign: "end", fontStyle: "italic" }}>Select gender and nationality first</p>}
      <div className={IdentityStyles["input-grids"]}>
        <div className={IdentityStyles["input-grids__2"]}>
          <label htmlFor="surnameInput">Last Name*</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="—" id="surnameInput" className={IdentityStyles["surnameInput"]} />
        </div>
        <div className={IdentityStyles["input-grids__1"]}>
          <label htmlFor="nameInput">First Name*</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="—" id="nameInput" className={IdentityStyles["nameInput"]} />
        </div>
        <div className={IdentityStyles["input-grids__3"]}>
          <button onClick={generateName} className={IdentityStyles["generateButton"]}>
            GENERATE
          </button>
        </div>
        <div className={IdentityStyles["input-grids__4"]}>
          <label htmlFor="nationalityInput">Nationality*</label>
          <select value={nationality} onChange={(e) => setNationality(e.target.value)} type="text" placeholder="— select —" id="nationalityInput" className={IdentityStyles["nationalityInput"]}>
            <option value="none">— select —</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="japanese">Japanese</option>
            <option value="russian">Russian</option>
            <option value="german">German</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="italian">Italian</option>
            <option value="brazilian">Brazilian</option>
            <option value="korean">Korean</option>
            <option value="chinese">Chinese</option>
            <option value="mexican">Mexican</option>
            <option value="polish">Polish</option>
            <option value="swedish">Swedish</option>
            <option value="norwegian">Norwegian</option>
            <option value="romanian">Romanian</option>
          </select>
        </div>
        <div className={IdentityStyles["input-grids__5"]}>
          <label htmlFor="genderInput">Gender*</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="—" id="genderInput" className={IdentityStyles["genderInput"]}>
            <option value="none">— select —</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}
