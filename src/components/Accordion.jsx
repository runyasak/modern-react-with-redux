import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = (valueItems) => valueItems.map((value, index) => (
    <Fragment key={value.title}>
      <div
        className="title active"
        onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon" />
        {value.title}
      </div>
      <div className="content active">
        <p>{value.content}</p>
      </div>
    </Fragment>
  ));

  return (
    <div className="ui styled accordion">
      {renderedItems(items)}
      <h1>{activeIndex}</h1>
    </div>
  );
};
export default Accordion;
