import React, { Component } from 'react';
import classNames from 'classnames';


export default class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            liked: false,
            likes: 100
        };
    }

handleClick = () =>{
    this.setState(prevState => ({
        liked: !prevState.liked, likes: prevState.liked ? prevState.likes - 1:prevState.likes + 1 }));
};
    render() {
        const{ liked, likes } = this.state;
        return (
            <>
                <div>
                    <h2>Like Button</h2>
                    <button className={classNames('like-button', {'liked':liked})} onClick={this.handleClick}>Like | <span className="likes-counter">{likes}</span>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}