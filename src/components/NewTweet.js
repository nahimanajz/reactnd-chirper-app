import React from 'react';
import { handleAddTweet } from '../actions/tweets';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class NewTweet extends React.Component {
    state = {
        text: '',
        toHome: false
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const { text } = this.state;
        const { dispatch, id } = this.props;
        
        dispatch(handleAddTweet(text, id))

        this.setState(()=>({
            text: '',
            toHome: id?false:true

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
        const { text, toHome } = this.state;
        if(toHome === true){
            return <Redirect to={'/'}/>
        }
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