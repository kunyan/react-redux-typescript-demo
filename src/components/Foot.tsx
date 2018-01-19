import React from 'react';

export interface IFootProps {
  shoes: string;
}
export class Foot extends React.PureComponent<IFootProps> {
  render() {
    return (
      <div id="foot">
        {this.props.shoes && <div id={this.props.shoes}></div>}
      </div>
    );
  }
}
