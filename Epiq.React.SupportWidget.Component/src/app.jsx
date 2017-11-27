import React from 'react';
import ReactDOM from 'react-dom';
import SupportWidgetComponent from 'SupportWidgetComponent.jsx';
import $ from 'jquery';

$.connection.hub.url = "http://epiq-chat-signalr-server.azurewebsites.net/signalr";

ReactDOM.render(
    <SupportWidgetComponent />,
    document.getElementById('Content')
);