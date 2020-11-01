import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  console.log(language);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="translate">
            Enter Text
            <input id="translate" value={text} onChange={(e) => setText(e.target.value)} />
          </label>
        </div>
      </div>

      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
