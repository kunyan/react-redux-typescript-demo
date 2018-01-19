import React from 'react';
import { connect } from 'react-redux';
import { wearHat, wearGlasses, wearUpperClothes, wearShoes, wearLowerClothes } from '../redux/actions/humanAction';

interface IProps {
    dispatch?: any;
}

class Toolbox extends React.Component<IProps> {
    onWearHat = () => {
        this.props.dispatch(wearHat('redhat'));
    }

    onWearGlasses = () => {
        this.props.dispatch(wearGlasses('glasses'));
    }

    onWearUpperClothes = () => {
        this.props.dispatch(wearUpperClothes('tshirt'));
    }

    onWearLowerClothes = () => {
        this.props.dispatch(wearLowerClothes('jeans'));
    }

    onWearShoes = () => {
        this.props.dispatch(wearShoes('shoes'));
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href="javascript:;" onClick={this.onWearHat}>Wear a hat</a></li>
                    <li><a href="javascript:;" onClick={this.onWearGlasses}>Wear a glasses</a></li>
                    <li><a href="javascript:;" onClick={this.onWearUpperClothes}>Wear a T-shirt</a></li>
                    <li><a href="javascript:;" onClick={this.onWearLowerClothes}>Wear a trousers</a></li>
                    <li><a href="javascript:;" onClick={this.onWearShoes}>Wear a shoes</a></li>
                </ul>
            </div>
        );
    }
}

export default connect()(Toolbox);