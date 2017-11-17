import React from 'react';
import Major from './Major';
import Announcer from './Announcer';
import content from './content.json';

class MajorSection extends React.Component {
  state = {
    major: 'content'
  }

  setMajor = (major) => {
    this.setState({
      major
    });
  }

  render() {
    return (
      <div>
        <div className="columns is-mobile is-multiline">
          { content.majors.map((m, index) => (
            <div className="column is-half-mobile" key={index}>
              <Major
                name={m.name}
                handleMajor={this.setMajor}
                isActive={m.name === this.state.major}
              />
            </div>
          ))}
        </div>
        <Announcer major={content.majors.find(m => m.name === this.state.major)} />
      </div>
    );
  }
}

export default MajorSection;
