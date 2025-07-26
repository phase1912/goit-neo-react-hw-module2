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

    const [feedbackState, setFeedbackState] = useLocalStorage('feedback-state', initialFeedback);

    const updateFeedback = feedbackType => {
        setFeedbackState(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setFeedbackState(initialFeedback);
    }

    const totalFeedback = feedbackState.good + feedbackState.neutral + feedbackState.bad;
    const positive = totalFeedback > 0 ? Math.round((feedbackState.good / totalFeedback) * 100) : 0;

    return (
        <>
            <Description/>
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
            {totalFeedback > 0 && <Feedback state={feedbackState} positive={positive} totalFeedback={totalFeedback} />}
            {totalFeedback <= 0 && <Notification/>}
        </>
    )
}

export default App;
