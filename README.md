# Character Bible Generator

_Give them a soul. Give them a wound. Give them a name._

An AI-powered narrative design tool for writers, game designers, and storytellers. Fill in your character's identity, appearance, and psychological profile - and let AI forge a complete character bible in the tone of a dark literary author.

Preview Link: https://character-bible-generator-obqv1gy5j-salemgodfreys-projects.vercel.app/

## ✨ Features

- **AI-generated character bibles** via Google Gemini
- **Three archetype systems** - Mark & Pearson, Campbell, Enneagram
- **Full identity form** - name, nationality, gender, age
- **Appearance controls** - hair, eyes, height
- **Psychological depth** - defining trauma, role in story, genre
- **Name generator** - one click to generate a fitting dark name
- **Smart validation** - FORGE button locks until required fields are filled
- **Markdown rendering** - output formatted as a readable document

## 🛠️ Built With

- React
- Google Gemini API (`gemini-2.0-flash`)
- react-markdown
- CSS Modules
- Vite

## 🚀 Getting Started

```bash
git clone https://github.com/SalemGodfrey/character-bible-generator.git
cd character-bible-generator
npm install
```

Create a `.env` file in the root:

```
VITE_GEMINI_KEY=your_api_key_here
```

Get your free API key at [aistudio.google.com](https://aistudio.google.com)

```bash
npm run dev
```

## 📖 Archetype Systems

| System             | Best For                        |
| ------------------ | ------------------------------- |
| **Mark & Pearson** | Brand-driven character identity |
| **Campbell**       | Role in the narrative journey   |
| **Enneagram**      | Deep psychological motivation   |

## 📁 Project Structure

```
src/
├── api/
│   ├── gemini.js
│   ├── american.json
│   ├── brazilion.json
│   ├── british.json
│   ├── chinese.json
│   ├── french.json
│   ├── german.json
│   ├── italian.json
│   ├── japanese.json
│   ├── korean.json
│   ├── mexican.json
│   ├── norvegian.json
│   ├── polish.json
│   ├── romanian.json
│   ├── russian.json
│   ├── spanish.json
│   └── swedish.json
├── components/
│   ├── Identity.jsx
│   ├── Appearance.jsx
│   ├── Story.jsx
│   └── Output.jsx
├── styles/
|   ├── App.css
|   ├── Appearance.module.css
|   ├── Identity.module.css
|   └── Story.module.css
├── main.jsx
└── App.jsx
```
#
