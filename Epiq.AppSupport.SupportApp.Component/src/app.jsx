import React from 'react';
import ReactDOM from 'react-dom';
import SupportAppComponent from 'SupportAppComponent.jsx';
import $ from 'jquery';

$.connection.hub.url = "http://sayhivm20170801035834.azurewebsites.net/signalr";

ReactDOM.render(
    <SupportAppComponent />,
    document.getElementById('Content')
);