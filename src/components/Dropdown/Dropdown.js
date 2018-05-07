import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }
    toggleState() {
        this.setState({ isOpened: !this.state.isOpened })
    }
    render() {
        let dropText;

        if (this.state.isOpened) {
            dropText = <div>Here is what is shown in dropdown</div>
        }

        const element = (
            <div onClick={this.toggleState.bind(this)}>
                It's Dropdown
                {dropText}
            </div>
        );

        console.log('isOpened', this.state.isOpened);
        
        return element;
    }
}

export default Dropdown;