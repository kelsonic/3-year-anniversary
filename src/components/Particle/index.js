// Depenencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import random from 'lodash/random';
import sample from 'lodash/sample';
// Externals
import heart from '../../assets/images/heart.svg';


class Particle extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    positionX: PropTypes.number.isRequired,
    removeSelfFromDOM: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const depth = random(1, 3, true);

    this.state = {
      askedToBeRemoved: false,
      maxPositionY: window.innerHeight || 500,
      positionX: props.positionX,
      positionY: 0,
      sizeMultiplier: depth,
      speed: depth / 2,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.move, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.positionY !== this.state.positionY) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  move = () => {
    // HOT CODE!!!!
    const { maxPositionY, positionY: oldPositionY, speed } = this.state;
    const positionY = oldPositionY + speed;
    if (positionY > maxPositionY ) {
      this.props.removeSelfFromDOM(this.props.id);
      return;
    }
    this.setState({ positionY });
  }

  render() {
    // HOT CODE!!!!
    const { positionX, positionY, sizeMultiplier } = this.state;

    return (
      <Wrapper
        alt="heart node"
        src={heart}
        style={{
          left: `${positionX}%`,
          top: `${positionY}px`,
          height: sizeMultiplier * 10,
          width: sizeMultiplier * 10,
        }}
      />
    );
  }
}

const Wrapper = styled.img`
  background: transparent;
  border-radius: 100%;
  position: absolute;
`;

export default Particle;
