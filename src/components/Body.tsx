import React from 'react';
import { UpperBody, IUpperBodyProps } from './UpperBody';
import { LowerBody, ILowerBodyProps } from './LowerBody';

type IBodyProps = IUpperBodyProps & ILowerBodyProps;

export class Body extends React.PureComponent<IBodyProps> {
  render() {
    return (
      <div>
        <UpperBody upperClothes={this.props.upperClothes}/>
        <LowerBody lowerClothes={this.props.lowerClothes}/>
      </div>
    );
  }
}
