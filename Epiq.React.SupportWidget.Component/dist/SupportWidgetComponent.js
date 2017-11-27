import React from 'react';
import SupportButtonComponent from 'epiq-react-components-supportbutton';
import SupportChatComponent from 'epiq-react-components-chatwindow';

class SupportWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showChat: false };

        this.showChatWindow = this.showChatWindow.bind(this);
    }

    showChatWindow() {
        const { showChat } = this.state;
        this.setState({ showChat: !showChat });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(SupportButtonComponent, { onClick: this.showChatWindow }),
            this.state.showChat && React.createElement(SupportChatComponent, { type: '0', image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg' })
        );
    }
}

export default SupportWidgetComponent;
