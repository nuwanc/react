import React from 'react';

import CommentBox from './comment-box';

var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBoxApp extends React.Component {
    render() {
        return (<CommentBox url="comments.json" pollInterval={2000}/>);
    }
}

React.render(<CommentBoxApp />,document.getElementById("content"));
