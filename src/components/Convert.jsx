import React, { useState, useEffect } from 'react';
import { createTranslate } from '../providers/translate';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => { setDebouncedText(text); }, 500);

    return () => { clearTimeout(timerId); };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const result = await createTranslate({ q: debouncedText, target: language.value });
      const { translatedText } = result.data.translations[0];
      setTranslated(translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">
        {translated}
      </h1>
    </div>
  );
};

export default Convert;
