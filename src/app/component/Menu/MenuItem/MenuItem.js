import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.scss';

class MenuItem extends React.Component {
    render() {
        return (
            <div className="MenuItem">
                {this.props.title}
            </div>
        );
    }
}

export default MenuItem;