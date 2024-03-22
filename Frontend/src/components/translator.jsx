import "../styles/translator.css";

export default function Translator() {
  return (
    <>
      <div className="translator-container">
        <div className="language-field">
          <h2>RUSSIAN</h2>
          <h2>ENGLISH</h2>
        </div>

        <div className="inputs-field">
          <textarea
            type="textarea"
            className="input-text"
            placeholder="Начните писать текст"
          ></textarea>

          <textarea
            type="textarea"
            className="input-translate"
            readOnly
          ></textarea>
        </div>

        <div className="button-dictionary-field">
          <button className="button-add-dictionary-words">
            Добавить в словарик
          </button>
        </div>
      </div>
    </>
  );
}
