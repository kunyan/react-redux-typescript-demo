import React from 'react';

export interface ILowerBodyProps {
  lowerClothes: string;
}

export class LowerBody extends React.PureComponent<ILowerBodyProps> {
  render() {
    return (
      <div id="lowerBody">
        {this.props.lowerClothes && <div id={this.props.lowerClothes}></div>}
      </div>
    );
  }
}
