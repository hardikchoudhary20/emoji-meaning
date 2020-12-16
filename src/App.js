import React, { useState } from "react";
import "./styles.css";

var emojidictionary = {
  "😀": "GRINNING FACE",
  "😁": "GRINNING FACE WITH SMILING EYES",
  "😂": "FACE WITH TEARS OF JOY",
  "😄": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
  "😅": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
  "😆": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
  "😇": "SMILING FACE WITH HALO",
  "😈": "SMILING FACE WITH HORNS",
  "😉": "WINKING FACE",
  "😊": "SMILING FACE WITH SMILING EYES",
  "😋": "FACE SAVOURING DELICIOUS FOOD",
  "😌": "RELIEVED FACE",
  "😍": "SMILING FACE WITH HEART-SHAPED EYES",
  "😎": "SMILING FACE WITH SUNGLASSES",
  "😏": "SMIRKING FACE",
  "😐": "NEUTRAL FACE",
  "😑": "EXPRESSIONLESS FACE",
  "😒": "UNAMUSED FACE",
  "😓": "FACE WITH COLD SWEAT",
  "😔": "PENSIVE FACE",
  "😕": "CONFUSED FACE",
  "😖": "CONFOUNDED FACE",
  "😗": "KISSING FACE",
  "😘": "FACE THROWING A KISS",
  "😙": "KISSING FACE WITH SMILING EYES",
  "😚": "KISSING FACE WITH CLOSED EYES",
  "😛": "FACE WITH STUCK-OUT TONGUE",
  "😜": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
  "😝": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
  "😞": "DISAPPOINTED FACE",
  "😟": "WORRIED FACE",
  "😠": "ANGRY FACE",
  "😡": "POUTING FACE",
  "😢": "CRYING FACE",
  "😣": "PERSEVERING FACE",
  "😤": "FACE WITH LOOK OF TRIUMPH",
  "😥": "DISAPPOINTED BUT RELIEVED FACE",
  "😦": "FROWNING FACE WITH OPEN MOUTH",
  "😧": "ANGUISHED FACE",
  "😨": "FEARFUL FACE",
  "😩": "WEARY FACE",
  "😪": "SLEEPY FACE",
  "😫": "TIRED FACE",
  "😬": "GRIMACING FACE",
  "😭": "LOUDLY CRYING FACE",
  "😮": "FACE WITH OPEN MOUTH",
  "😯": "HUSHED FACE",
  "😰": "FACE WITH OPEN MOUTH AND COLD SWEAT",
  "😱": "FACE SCREAMING IN FEAR",
  "😲": "ASTONISHED FACE",
  "😳": "FLUSHED FACE",
  "😴": "SLEEPING FACE",
  "😵": "DIZZY FACE",
  "😶": "FACE WITHOUT MOUTH",
  "😷": "FACE WITH MEDICAL MASK"
};
var emojiindict = Object.keys(emojidictionary);
export default function App() {
  const [meaning, setMeaning] = useState("Meaning will appear here :)");
  // var [userInput, setUserInput] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojidictionary[userInput];
    console.log(meaning);
    setMeaning(meaning);

    if (meaning === undefined) {
      setMeaning("We don't have this in our database");
      console.log(meaning);
    }
  }
  function emojiclickHandler(emoji) {
    var meaning = emojidictionary[emoji];
    setMeaning(meaning);
  }
  // function inputChangeHandler(event) {
  //   setUserInput(event.target.value);
  // }
  return (
    <div className="App">
      <h1> inside out </h1>
      <input
        onChange={emojiHandler}
        placeholder={"Type in any emoji here to get its meaning down "}
      />
      <div>welcome </div>
      <h2>
        <div>
          {emojiindict.map(function (emoji) {
            return (
              <em>
                <span
                  key={emoji}
                  onClick={() => emojiclickHandler(emoji)}
                  style={{
                    padding: "4px",
                    fontSize: "larger",
                    cursor: "pointer"
                  }}
                >
                  {emoji}
                </span>
              </em>
            );
          })}{" "}
        </div>
      </h2>
      <div
        style={{
          fontfamily: "Lucida Console",
          padding: "1rem",
          marginTop: "50px",
          fontWeight: "bolder",
          fontStyle: "italic",
          backgroundColor: "gray"
        }}
      >
        {" "}
        {meaning}{" "}
      </div>
    </div>
  );
}
