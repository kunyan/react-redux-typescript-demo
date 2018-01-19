import React from 'react';

export interface IHeadProps {
  hat: string;
  glasses: string;

  isWearingHat: boolean;
  isWearingGlasses: boolean;
}
export class Head extends React.PureComponent<IHeadProps> {
  render() {
    return (
      <div id="head">
        {this.props.hat && <div id={this.props.hat}></div>}
        {this.props.glasses && <div id={this.props.glasses} className="icon"></div>}
      </div>
    );
  }
}
