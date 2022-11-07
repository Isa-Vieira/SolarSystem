import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets-name">
        <Title headline="Planetas" className="all-planets" />
        {planets.map((element) => (
          <PlanetCard
            key={ element.name }
            planetName={ element.name }
            planetImage={ element.image }
          />
        )) }
      </div>
    );
  }
}
export default SolarSystem;
