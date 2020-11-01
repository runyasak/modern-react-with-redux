import React, { useState, useEffect } from 'react';
import { createTranslate } from '../providers/translate';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  useEffect(() => {
    const doTranslation = async () => {
      const result = await createTranslate({ q: text, target: language.value });
      const { translatedText } = result.data.translations[0];
      setTranslated(translatedText);
    };

    doTranslation();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">
        {translated}
      </h1>
    </div>
  );
};

export default Convert;
