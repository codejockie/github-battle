import React from 'react';

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
    const languages = ['All', 'JavaScript', 'Ruby', 'C#', 'Python', 'CSS']

    return (
      <ul className="languages">
        {
          languages.map((lang) => (
            <li
              key={lang}
              onClick={this.updateLanguage.bind(null, lang)}
              style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}>
              {lang}
            </li>
          ))
        }  
      </ul>
    )
  }
}