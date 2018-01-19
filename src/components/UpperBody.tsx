import React from 'react';

export interface IUpperBodyProps {
  upperClothes: string;
}

export class UpperBody extends React.PureComponent<IUpperBodyProps> {
  render() {
    return (
      <div id="upperBody">
        {this.props.upperClothes && (
          <div id={this.props.upperClothes}>
            CONTAINERS<br />
            <strong>ARE LINUX</strong>
          </div>
        )}
      </div>
    );
  }
}
