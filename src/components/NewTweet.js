import React from 'react';
import { handleAddTweet } from '../actions/tweets';
import {connect} from 'react-redux';

class NewTweet extends React.Component {
    state = {
        text: ''
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const { text } = this.state;
        const { dispatch, id } = this.props;
        
        dispatch(handleAddTweet(text, id))

        this.setState(()=>({
            text: ''
        }))
    }
    handleChange = (e) => {
        e.preventDefault();
        const text =  e.target.value;
        this.setState(()=>({
            text
        }))
    }
    render(){
        const { text } = this.state;
        // TODO:  redirect to / if submited
        const leftTweets = 208 - text.length;
        return (
            <div>
                <h3 className="center"> Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea 
                        value={text}
                        className="textarea"
                        placeholder="What 's on your Mind?"
                        onChange={this.handleChange}
                        maxLength={280}
                    />
                    <button type="submit" className="btn" disabled={text === ''}> Submit </button>
                </form>
                
                {text.length > 100 && <div className="tweet-left">{leftTweets}</div>}
            </div>
        )
    }
}
export default connect()(NewTweet);