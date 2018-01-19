import React from 'react';
import { connect } from 'react-redux';
import { IStateReduced } from '../redux/reducers';
import { Head } from './Head';
import { Body } from './Body';
import { Foot } from './Foot';

interface IOwnProps {}

interface IReduxProps {
  dispatch: any;

  hat: string;
  glasses: string;
  upperClothes: string;
  lowerClothes: string;
  shoes: string;

  isWearingHat: boolean;
  isWearingGlasses: boolean;
  isWearingUpperClothes: boolean;
  isWearingLowerClothes: boolean;
  isWearingShoes: boolean;
}

type IProps = IOwnProps & IReduxProps;

class Human extends React.Component<IProps> {
  render() {
    return (
      <div>
        <Head
          hat={this.props.hat}
          glasses={this.props.glasses}
          isWearingHat={this.props.isWearingHat}
          isWearingGlasses={this.props.isWearingGlasses}
        />
        <Body upperClothes={this.props.upperClothes} lowerClothes={this.props.lowerClothes} />
        <Foot shoes={this.props.shoes} />
      </div>
    );
  }
}

const mapStateToProps = (state: IStateReduced) => ({
  hat: state.humanDetails.hat,
  glasses: state.humanDetails.glasses,
  upperClothes: state.humanDetails.upperClothes,
  lowerClothes: state.humanDetails.lowerClothes,
  shoes: state.humanDetails.shoes,

  isWearingHat: state.humanDetails.isWearingHat,
  isWearingGlasses: state.humanDetails.isWearingGlasses,
  isWearingUpperClothes: state.humanDetails.isWearingUpperClothes,
  isWearingLowerClothes: state.humanDetails.isWearingLowerClothes,
  isWearingShoes: state.humanDetails.isWearingShoes,
});

export default connect(mapStateToProps)(Human);
