import React from 'react';
import PropTypes from 'prop-types';

function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'C#', 'Python', 'CSS'];
  
  return (
    <ul className="languages">
        {
          languages.map((lang) => (
            <li
              key={lang}
              onClick={props.onSelect.bind(null, lang)}
              style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}>
              {lang}
            </li>
          ))
        }  
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}