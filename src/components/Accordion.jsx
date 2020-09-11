import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const activeClass = (index) => (index === activeIndex ? 'active' : '');

  const renderedItems = (valueItems) => valueItems.map((value, index) => (
    <Fragment key={value.title}>
      <div
        className={`title ${activeClass(index)}`}
        onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon" />
        {value.title}
      </div>
      <div className={`content ${activeClass(index)}`}>
        <p>{value.content}</p>
      </div>
    </Fragment>
  ));

  return (
    <div className="ui styled accordion">
      {renderedItems(items)}
    </div>
  );
};
export default Accordion;
