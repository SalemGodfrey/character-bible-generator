import React from "react";
import AppearanceStyles from "../styles/Appearance.module.css";

export default function Appearance({ age, setAge}) {
  return (
    <div>
      <div className={AppearanceStyles["section-label"]}>appearance</div>
      <div className={AppearanceStyles["input-grids"]}>
        <div className={AppearanceStyles["input-grids__1"]}>
          <label htmlFor="hair-input">Hair Color</label>
          <select
            type="text"
            placeholder="—"
            id="hair-input"
            className={AppearanceStyles["hair-input"]}
          >
            <option value="[set by yourself]">— select —</option>
            <option value="black">Black</option>
            <option value="dark brown">Dark Brown</option>
            <option value="brown">Brown</option>
            <option value="auburn">Auburn</option>
            <option value="blonde">Blonde</option>
            <option value="platinum">Platinum</option>
            <option value="ginger">Ginger</option>
            <option value="grey">Grey</option>
            <option value="white">White</option>
            <option value="dyed, unnatural">Dyed - Unnatural</option>
            <option value="unknown, bald">Bald</option>
          </select>
        </div>
        <div className={AppearanceStyles["input-grids__2"]}>
          <label htmlFor="eyeColor-input">Eye Color</label>
          <select
            type="text"
            placeholder="—"
            id="eyeColor-input"
            className={AppearanceStyles["eyeColor-input"]}
          >
            <option value="[set by yourself]">— select —</option>
            <option value="brown">Brown</option>
            <option value="dark brown">Dark Brown</option>
            <option value="hazel">Hazel</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="grey">Grey</option>
            <option value="amber">Amber</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="heterochromic">Heterochromia</option>
          </select>
        </div>
        <div className={AppearanceStyles["input-grids__3"]}>
          <label htmlFor="height-input">Height</label>
          <select
            type="text"
            placeholder="—"
            id="height-input"
            className={AppearanceStyles["height-input"]}
          >
            <option value="none">— select —</option>
            <option value="under 155 cm">Under 155 cm</option>
            <option value="between 155–165 cm">155–165 cm</option>
            <option value="between 165–175 cm">165–175 cm</option>
            <option value="between 175–185 cm">175–185 cm</option>
            <option value="between 185–195 cm">185–195 cm</option>
            <option value="over 195 cm">Over 195 cm</option>
          </select>
        </div>
        <div className={AppearanceStyles["input-grids__4"]}>
          <label htmlFor="gender-input">Age*</label>
           <input value={age} onChange={(e) => setAge(e.target.value)}  type="number" min={1} placeholder="—" className={AppearanceStyles["age-input"]} />
        </div>
      </div>
    </div>
  );
}
