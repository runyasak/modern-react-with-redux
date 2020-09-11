import React, { Fragment } from 'react';

const onTitleClick = (index) => {
  console.log('Title Clicked', index);
};

const renderedItems = (items) => items.map((item, index) => (
  <Fragment key={item.title}>
    <div
      className="title active"
      onClick={() => onTitleClick(index)}
    >
      <i className="dropdown icon" />
      {item.title}
    </div>
    <div className="content active">
      <p>{item.content}</p>
    </div>
  </Fragment>
));

const Accordion = ({ items }) => <div className="ui styled accordion">{renderedItems(items)}</div>;

export default Accordion;
