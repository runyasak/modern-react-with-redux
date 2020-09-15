import React from 'react';
// import Accordion from './components/Accordion';
// import Dropdown from './components/Dropdown';
// import Search from './components/Search';
import Translate from './components/Translate';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components',
//   },
// ];

// const options = [
//   {
//     label: 'The Color Red',
//     value: 'red',
//   },
//   {
//     label: 'The Color Green',
//     value: 'green',
//   },
//   {
//     label: 'A Shade of Blue',
//     value: 'blue',
//   },
// ];

// eslint-disable-next-line arrow-body-style
export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Translate />
      {/* <button
        onClick={() => setShowDropdown(!showDropdown)}
        type="button"
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : undefined} */}
    </div>
  );
};
