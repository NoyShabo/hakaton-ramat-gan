import './story.css'
import React, { Component } from 'react';
import { Button } from '@mui/material';

export class Story extends Component {

    state = {story:``}
    
    componentDidMount() {
        this.setState({story:this.props.story, title:this.props.title})
    }
    
    voice = ()=>{
        var voices = [];
        
        voices = window.speechSynthesis.getVoices();
        var selectedIndex = 0;
        //  voiceList.selectedIndex = 0;
        var toSpeak = new SpeechSynthesisUtterance(this.state.title);
        voices.forEach((voice)=>{
            if(voice.name === "Microsoft Asaf - Hebrew (Israel)"){
                toSpeak.voice = voice;
            }
        });
        window.speechSynthesis.speak(toSpeak);
        voices = window.speechSynthesis.getVoices();
         selectedIndex = 0;
        //  voiceList.selectedIndex = 0;
         toSpeak = new SpeechSynthesisUtterance(this.state.story);
        voices.forEach((voice)=>{
            if(voice.name === "Microsoft Asaf - Hebrew (Israel)"){
                toSpeak.voice = voice;
            }
        });
        window.speechSynthesis.speak(toSpeak);
        
    }
    moveQuestion= ()=>{
        window.location.href="http://localhost:3000/#question";
    }

    render() {
        const story =this.props.story;
        const title =this.props.title;
        if(!story ) return (<div className="loading">Loading...</div>)
        return (
            <section className='question'>

                <div className="card">

                    <div className="card-contant">

                    <h2 className='title'>{title}</h2>

                    <div className="questionContainer">

                      <p>{story}</p> 
                      <Button onClick={this.moveQuestion} className='answer' variant="contained" style={{  fontFamily:  'Varela Round'}}color="warning" size="medium" sx={{fontSize: 24}}>עבור לשאלה</Button>
                      <Button onClick={this.voice} className='answer voicebtn' variant="contained" style={{  fontFamily:  'Varela Round'}}color="warning" size="large" sx={{fontSize: 24}}>שמע סיפור</Button>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

