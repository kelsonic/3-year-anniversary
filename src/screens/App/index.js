// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
// Externals
import Particles from '../../components/Particles';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 3,
      showHusbandMode: true,
    };
  }

  addPoint = () => {
    this.setState({ score: this.state.score + 1 });
  }

  addHusbandPoints = () => {
    this.setState({ score: this.state.score + 9897, showHusbandMode: false });
  }

  render() {
    const { addPoint, addHusbandPoints } = this;
    const { score, showHusbandMode } = this.state;

    return (
      <Wrapper>
        <Particles onCatch={addPoint} max={25} />
        <SectionOne>
          <HeaderText>I ❤️ Sandra</HeaderText>
          <HeaderSubtext>thisssss much!</HeaderSubtext>
          <Score>and {score} times over!</Score>
          <HeaderSubtext>3 Years of Love, Laughter, and Growth!</HeaderSubtext>
          {showHusbandMode && <HusbandMode onClick={addHusbandPoints}>(enable kel-mode)</HusbandMode>}
        </SectionOne>
      </Wrapper>
    );
  }
}

const HeaderText = styled.h1`
  color: #000000;
  font-size: 2.5rem;
  margin: 0 0 20px;
  z-index: 1;
`;

const HeaderSubtext = styled.p`
  color: #444444;
  font-size: 1.1rem;
  z-index: 1;
`;

const Score = styled.p`
  color: #f20000;
  font-size: 1.3rem;
  margin: 30px 0;
  z-index: 1;
`;

const HusbandMode = styled.button`
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 0.8rem;
  position: absolute;
  bottom: 20px;
  text-decoration: none;
  z-index: 1;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SectionOne = Section.extend`
  height: 100vh;
`;

const Wrapper = styled.div`
  background: linear-gradient(0deg, #ff0000 0%, #fff 40%, #fff 100%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  touch-action: none;
  width: 100%;
`;

export default App;
