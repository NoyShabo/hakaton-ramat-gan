import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import data from '../Data/data.json'
import {Question} from '../question/question.jsx';
import { Header } from '../header/header';
import { Story } from '../story/story';
import { Home } from '../../pages/homepage/home';
import  {Clue}  from '../clue/clue';
import { LastPage } from '../lastPage/lastPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id":1,
                    "title": "כיכר אורדע", 
                    "clue":"אני כיכר ידועה ויש לי שתי שמות. מקיימים בי הרבה אירועים ציבוריים ואפשר גם לשבת אצלי ולהנות מכוס קפה.",
                    "story":"כיכר אורדע היא הכיכר המרכזית הרמת גן אשר שם מתקיימים מפגשי בילוי ואירועים ציבוריים רבים. הכיבר עוצבה סביב שנות העשרים ונקראת על שם הרמבם ",
                    "type":"question",
                    "question":"כמה פסלי איילות יש במקום? ",
                    "options":
                    [
                    "1",
                    "5",
                    "3",
                    "אין איילות יש נשרים"
                    ],
                    "correctIndex": "2"
                },{
                    "id":2,
                    "title": "בית הספר בן גוריון", 
                    "clue":"יש מגדל מים בתוך בית ספר",
                    "story":"בית הספר בן גוריון ומגדל המים צמודים לגן אברהם ברמת גן. בהתחלה הוקם כבית ההבראה והחלמה , בסוף 1934 על ידי אגודת עזרה לחולים כרוניים ומבריאים בניין זה שימש לצורכי צבא, לאחר המלחמה המבנה הוסב לבית ספר בן גוריון.",
                    "type":"question",
                    "question":"כיצד נקרא בית הספר בעבר",
                    "options":
                    [
                    "א' קורצ'אק",
                    "הבילויים",
                    "ג' שיל'ה",
                    "רמת חן"
                    ],
                    "correctIndex": "2"
                },
                {
                    "id":3,
                    "title": "בית האופה", 
                    "clue":"מפולין הגיע יצחק מוגילבסקי,לצידי ביתו הקים..",
                    "story":"בית האופה בקצה הצפוני של שדרת הילד צמוד לרחוב זבוטינסקי, עד היום מבנה בית האופה שנבנה ב1925 עי יצחק מוגילבסקי בן למשפחת אופים שעלה מביאליסטוק פולין. בצד הבית הקים מוגילבסקי מאפיה שסיפקה לחם לכל התושבים וגם הוביל לחם לתל אביב. בשנת 1947 נוספה למבנה קומה שניה. הבית שהיה מחוץ ליישוב על הדרך לפתח תקווה היה לנקודת מפתח בהגנת היישוב ומרכז לשומרים שנהנו מריחות הלחם הטרי. ",
                    "type":"question",
                    "question":"באיזה שנה נבנה המקום",
                    "options":
                    [
                    "1925",
                    "2000",
                    "2015",
                    "1979"
                    ],
                    "correctIndex": "0"
                    },{
                    "id":4,
                    "title": "גן אברהם", 
                    "clue":"המשורר חיים נחמן ביאליק אמר על המקום-כאן מצאתי את המנוחה שביקשתי",
                    "story":"גן אברהם אשר נקרא בעבר גן הנצחון נמצא על גבעה שהיא אחת מארבע הגבעות של רמת גן ההסטורית. בתחילה ניטעה חורשה על פסגת הגבעה, בשנת 1936 הפכה לגן ציבורי. כיום בגן פועלת גינה קהילתית , יש בו מתקני שעשועים,מתקני כושר, מגרשי ספורט ועוד",
                    "type":"question",
                    "question":"מה הגובה של הגבעה בה נמצא הגן?",
                    "options":
                    [
                    "30 מטר",
                    "70 מטר",
                    "15 מטר",
                    "60 מטר"
                    ],
                    "correctIndex": "3"
                }
                    
            ],
            score:0,
            currQestionIndex:0
        }
        // this.func = this.func.bind(this);
    }
    componentDidMount() {
        // data.map(item => this.addToVacationsData({ id: item.id, name: item.name, location: item.location, price: item.price, imageUrl: item.imageUrl }))
        this.setState({
            data:data,
            score:0,
            currQestionIndex:0
        })
    }

    changeScore = ()=>{
        this.setState((prevstate)=>({...prevstate, score:prevstate.score+25}));
    }


    changeQuestion = ()=>{
        if(this.state.currQestionIndex <this.state.data.length){
            this.setState((prevState=>({...prevState, currQestionIndex:prevState.currQestionIndex+1 })))
        }
        else{
            window.location.href="http://localhost:3000/#lastPage";
        }
    }

    render() {
        const {score, data, currQestionIndex} = this.state;
        
        if(!data) return (<div></div>)
        return(
        <Router>
            <Header  score={score}/>
            <div className="App">
                <section style={{marginTop :157}}>
                    
            <Switch >
                <Route path="/story" component={()=><Story story={data[currQestionIndex].story} title={data[currQestionIndex].title} changeScore={this.changeScore}/>}  />
                <Route path="/question" component={()=><Question question={data[currQestionIndex]} changeQuestion={this.changeQuestion } changeScore={this.changeScore}/>}  />
                <Route path="/home" component={()=><Home/>}  />
                <Route path="/clue" component={()=><Clue clue={data[currQestionIndex].clue}/>}  />
                <Route path="/lastPage" component={()=><LastPage score={score}/>}  />
            </Switch >
                </section>
            </div>
        </Router>
        )
    }
}
export default App;

