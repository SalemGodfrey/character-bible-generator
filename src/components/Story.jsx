import React from "react";
import StoryStyles from "../styles/Story.module.css";

export default function Story({ archetypeSystem, setArchetypeSystem, trauma, setTrauma, role, setRole, archetype, setArchetype, genre, setGenre }) {
  return (
    <div>
      <div className={StoryStyles["section-label"]}>psychology & story</div>
      <div className={StoryStyles["input-grids"]}>
        <div className={StoryStyles["input-grids__1"]}>
          <label htmlFor="archetype-input">Archetype*</label>
          <select value={archetype} onChange={(e) => setArchetype(e.target.value)} type="text" placeholder="—" id="archetype-input" className={StoryStyles["archetype-input"]}>
            <option value="none">— choose system and select —</option>
            {archetypeSystem === "Mark & Pearson" && (
              <optgroup id="markParson">
                <option value="by mark & pearson - innocent" title="Optimistic and pure - believes in the goodness of the world">
                  The Innocent
                </option>
                <option value="by mark & pearson - everyman" title="Relatable and down-to-earth - just wants to belong">
                  The Everyman (Regular Guy/Girl)
                </option>
                <option value="by mark & pearson - hero" title="Courageous and driven - proves worth through difficult action">
                  The Hero
                </option>
                <option value="by mark & pearson - outlaw" title="Rebellious and disruptive - breaks rules to change the world">
                  The Outlaw
                </option>
                <option value="by mark & pearson - explorer" title="Restless and independent - searches for a better, authentic life">
                  The Explorer
                </option>
                <option value="by mark & pearson - creator" title="Imaginative and visionary - driven to build something meaningful">
                  The Creator
                </option>
                <option value="by mark & pearson - ruler" title="Controlling and responsible - creates order from chaos">
                  The Ruler
                </option>
                <option value="by mark & pearson - magician" title="Transformative and visionary - makes dreams into reality">
                  The Magician
                </option>
                <option value="by mark & pearson - lover" title="Passionate and intimate - driven by connection and desire">
                  The Lover
                </option>
                <option value="by mark & pearson - caregiver" title="Nurturing and selfless - protects and serves others">
                  The Caregiver
                </option>
                <option value="by mark & pearson - sage" title="Wise and reflective - seeks truth and understanding">
                  The Sage
                </option>
                <option value="by mark & pearson - jester" title="Playful and irreverent - lives in the moment, brings joy and chaos">
                  The Jester
                </option>
              </optgroup>
            )}
            {archetypeSystem === "Enneagram" && (
              <optgroup id="enneagram">
                <option value="by enneagram - reformer" title="Principled perfectionist - fears being corrupt, desires to be good">
                  The Reformer
                </option>
                <option value="by enneagram - helper" title="Generous but possessive - fears being unloved, desires to be needed">
                  The Helper
                </option>
                <option value="by enneagram - achiever" title="Driven and image-conscious - fears being worthless, desires success">
                  The Achiever
                </option>
                <option value="by enneagram - individualist" title="Melancholic and expressive - fears having no identity, desires significance">
                  The Individualist
                </option>
                <option value="by enneagram - investigator" title="Detached observer - fears incompetence, desires to understand everything">
                  The Investigator
                </option>
                <option value="by enneagram - loyalist" title="Anxious and loyal - fears having no support, desires security">
                  The Loyalist
                </option>
                <option value="by enneagram - enthusiast" title="Scattered and spontaneous - fears pain and deprivation, desires freedom">
                  The Enthusiast
                </option>
                <option value="by enneagram - challenger" title="Dominating protector - fears being controlled, desires autonomy">
                  The Challenger
                </option>
                <option value="by enneagram - peacemaker" title="Conflict-avoidant - fears loss and separation, desires inner peace">
                  The Peacemaker
                </option>
              </optgroup>
            )}
            {archetypeSystem === "Campbell" && (
              <optgroup id="campbell">
                <option value="by campbell - hero" title="The protagonist - answers the call, faces trials, transforms">
                  The Hero
                </option>
                <option value="by campbell - mentor" title="Guides and prepares the hero - often sacrificed or left behind">
                  The Mentor
                </option>
                <option value="by campbell - guard" title="Tests the hero's resolve before they can cross into the new world">
                  The Threshold Guardian
                </option>
                <option value="by campbell - herald" title="Brings the call to adventure - signals that change is coming">
                  The Herald
                </option>
                <option value="by campbell - shapeshifter" title="Shifts allegiance and identity - creates doubt and tension">
                  The Shapeshifter
                </option>
                <option value="by campbell - shadow" title="The villain or dark mirror - embodies the hero's greatest fear">
                  The Shadow
                </option>
                <option value="by campbell - trickster" title="Brings chaos and comic relief - questions the status quo">
                  The Trickster
                </option>
                <option value="by campbell - ally" title="Accompanies the hero - provides support, loyalty, and contrast">
                  The Ally
                </option>
              </optgroup>
            )}
          </select>
          <div>
            <div className={StoryStyles["radio-group"]}>
              {["Mark & Pearson", "Campbell", "Enneagram"].map(function (system) {
                return (
                  <label key={system} className={StoryStyles["radio-label"]}>
                    <input
                      type="radio"
                      name="archetype-system"
                      value={system}
                      checked={archetypeSystem === system}
                      onChange={function (e) {
                        setArchetypeSystem(e.target.value);
                      }}
                      className={StoryStyles["radio-input"]}
                    />
                    <span className={StoryStyles["radio-custom"]}></span>
                    {system}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <div className={StoryStyles["input-grids__2"]}>
          <label htmlFor="genreInput">Genre*</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}  type="text" placeholder="— select —" id="genreInput" className={StoryStyles["genreInput"]}>
            <option value="none">— select —</option>
            <option value="psychological horror" title="Fear from within - trauma, guilt, and fractured reality. Think Silent Hill, Black Swan">
              Psychological Horror
            </option>
            <option value="survival horror" title="Scarce resources, constant threat - fight or flee to stay alive. Think Resident Evil, The Last of Us">
              Survival Horror
            </option>
            <option value="sci-fi horror" title="Technology and cosmos turned terrifying - the unknown made flesh. Think Alien, Event Horizon">
              Sci-fi Horror
            </option>
            <option value="splatterpunk" title="Raw, visceral horror - graphic violence as a literary device. Think Clive Barker">
              Splatterpunk
            </option>
            <option value="dark fantasy" title="Magic and myth soaked in darkness - moral ambiguity, brutal worlds. Think Berserk, The Witcher">
              Dark Fantasy
            </option>
            <option value="high fantasy" title="Epic worlds with deep lore - heroes, prophecy, ancient evil. Think Tolkien, Game of Thrones">
              High Fantasy
            </option>
            <option value="low fantasy" title="Our world with a touch of the impossible - grounded and intimate. Think Pan's Labyrinth">
              Low Fantasy
            </option>
            <option value="post-apocalyptic" title="Civilization in ruins - survival, loss, and what humanity becomes. Think The Road, Fallout">
              Post-Apocalyptic
            </option>
            <option value="noir" title="Crime, corruption, and moral ambiguity - rain-soaked streets and broken people. Think Chinatown, The Wolf Among Us">
              Noir
            </option>
            <option value="detective" title="Truth buried under lies - logic, deduction, and hidden motives. Think True Detective, L.A. Noire">
              Detective
            </option>
            <option value="gothic" title="Decay, obsession, and the weight of the past - beauty in darkness. Think Poe, Dracula, Crimson Peak">
              Gothic
            </option>
            <option value="romance" title="Love as the central conflict - longing, connection, and the cost of the heart">
              Romance
            </option>
            <option value="drama" title="Human relationships under pressure - no monsters, just people destroying each other">
              Drama
            </option>
            <option value="supernatural thriller" title="The inexplicable bleeds into reality - dread builds from what cannot be explained. Think Twin Peaks">
              Supernatural Thriller
            </option>
            <option value="mystery" title="A secret at the center - everything and everyone is a clue. Think Agatha Christie, Disco Elysium">
              Mystery
            </option>
            <option value="cyberpunk" title="Tech excess and human decay - corporations own the future, rebels own the night. Think Blade Runner, Neuromancer">
              Cyberpunk
            </option>
            <option value="steampunk" title="Victorian aesthetics meets industrial invention - gears, airships, and class warfare. Think Bioshock Infinite">
              Steampunk
            </option>
          </select>
        </div>
        <div className={StoryStyles["input-grids__3"]}>
          <label htmlFor="traumaInput">defining trauma</label>
          <textarea value={trauma} onChange={(e) => setTrauma(e.target.value)} cols="30" rows="6" placeholder="What broke them - and what they carry because of it..." style={{ fontStyle: "italic" }}></textarea>
        </div>
        <div className={StoryStyles["input-grids__4"]}>
          <label htmlFor="roleInput">role in story</label>
          <textarea value={role} onChange={(e) => setRole(e.target.value)} cols="30" rows="6" placeholder="Their function in the narrative - what they represent, what they drive..." style={{ fontStyle: "italic" }}></textarea>
        </div>
      </div>
    </div>
  );
}
