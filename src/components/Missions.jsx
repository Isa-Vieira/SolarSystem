import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((param) => (
          <MissionCard
            key={ param.name }
            name={ param.name }
            year={ param.year }
            country={ param.country }
            destination={ param.destination }
          />
        ))}
      </div>

    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Missions;
