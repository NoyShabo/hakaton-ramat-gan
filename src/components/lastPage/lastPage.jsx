import React, { Component } from 'react';
import './lastPage.css'


export class LastPage extends Component {

    state = {score:this.props.score}
    
    componentDidMount() {
        this.setState({score:this.props.score})
    }
    

    render() {
        const score =this.props.score;
        console.log(this.props);
        // if(!score ) return (<div className="loading">Loading...</div>)
        return (
            <section className='score'>
                <h2>כל הכבוד ! הציון שלך הוא:</h2>
                <h2><span>{score}</span></h2>
                <h2>זכית ב <span>{score}</span>% הנחה ב  :</h2>
                <img src="https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.6435-9/106276085_107693967670657_2385156112215940571_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ItWrigRG5CgAX_34ZkC&_nc_ht=scontent.ftlv2-1.fna&oh=00_AT9hXEfpTUiuA6WMoGIgISdrPTJZrfWVqwvjD3cxky7OQQ&oe=61FA41BC" alt="" />
            </section>
        );
    }
}

