import './question.css'
import React, { Component } from 'react';

import { Button } from '@mui/material';
export class Question extends Component {

    state = {
        
    }

    componentDidMount() {
        this.setState({...this.props.question, isClicked:false})
    }
    
    checkAnswer = (idx)=>{
        console.log('chose', idx);
        console.log('answer', this.state.correctIndex);
        this.setState({isClicked:true});
        if(+idx==+this.state.correctIndex){
            console.log('you win');

            this.props.changeScore();

        }
        else{
            console.log('you lose');
        }
        console.log(this.props);
              
            this.props.changeQuestion();

        if(this.props.question.id <4 ){
            window.location.href="http://localhost:3000/#clue";
        }
        if(this.props.question.id ==4 ){
            window.location.href="http://localhost:3000/#lastPage";
        }
        
    }

getClass(){
  return "answer";
} 

    render() {
        const {type,question,options,_id} =this.state;
        if(!type || !question) return (<div className="loading">Loading...</div>)
        return (
            <section className='question'>

                <div className="card">

                    <div className="card-contant">

                    <h2 className='title'> שאלה {_id}</h2>

                    <div className="questionContainer">

                    {
                        type === 'image' ? <img src={question} alt="" /> :''
                    }
                    {
                        type === 'question' ?  <h2>{question}</h2> :''
                    }
                    </div>

                    <ul>
                        {options.map((option,idx)=>{
                            return (<li onClick={()=>this.checkAnswer(idx)} key={idx} >
                                <Button className={this.getClass()} variant="contained" style={{  fontFamily:  'Varela Round'}}  size="large" sx={{fontSize: 24}}>{option}</Button></li>)
                        })}
                    </ul>
                </div>
                </div>
            </section>
        );
    }
}

