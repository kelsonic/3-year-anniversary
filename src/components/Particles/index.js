// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';
import map from 'lodash/map';
import random from 'lodash/random';
import filter from 'lodash/filter';
import times from 'lodash/times';
// Externals
import Particle from '../Particle';


class Particles extends Component {
  static propTypes = {
    max: PropTypes.number,
    onCatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    max: 50,
  };

  constructor(props) {
    super(props);
    this.state = {
      particles: [],
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.emitParticleLine, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  emitParticleLine = () => {
    const { particles } = this.state;
    if (particles.length >= this.props.max) {
      clearInterval(this.interval);
      this.interval = setInterval(this.emitParticleLine, 1000);
      return;
    }

    times(random(0, 3), () => {
      particles.push({
        id: uuidv4(),
        positionX: random(1, 100),
      });
    });
    this.setState({ particles });
  }

  removeParticle = (id) => {
    const { particles } = this.state;
    const trimmedParticles = filter(particles, (particle) => particle.id !== id);
    this.setState({ particles: trimmedParticles });
    this.props.onCatch();
  }

  render() {
    const { particles } = this.state;

    return (
      <Wrapper>
        {map(particles, ({ id, positionX }) => (
          <Particle
            key={id}
            id={id}
            positionX={positionX}
            removeSelfFromDOM={this.removeParticle}
          />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export default Particles;
