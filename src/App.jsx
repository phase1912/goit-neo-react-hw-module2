import './App.css'
import Description from "./components/description/Description.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import { useLocalStorage } from "usehooks-ts";
import Notification from "./components/notification/Notification.jsx";

function App() {
    const initialFeedback = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    const [feedbackState, setFeedbackState, removeFeedbackState] = useLocalStorage('feedback-state', initialFeedback);

    const updateFeedback = feedbackType => {
        feedbackState[feedbackType] = feedbackState[feedbackType] + 1;
        setFeedbackState(feedbackState);
    }

    const resetFeedback = () => {
        setFeedbackState(initialFeedback);
    }

    const totalFeedback = feedbackState.good + feedbackState.neutral + feedbackState.bad;
    const positive = Math.round((feedbackState.good / totalFeedback) * 100);

    return (
        <>
            <Description/>
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
            {totalFeedback > 0 && <Feedback state={feedbackState} positive={positive} />}
            {totalFeedback <= 0 && <Notification/>}
        </>
    )
}

export default App
