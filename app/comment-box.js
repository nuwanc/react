import React from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';
import $ from 'jquery';

export default class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data:[]};
    }

    loadCommentsFromServer() {
        /*$.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });*/

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data)=>{
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });

    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer.bind(this), 2000);
    }

    render () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}