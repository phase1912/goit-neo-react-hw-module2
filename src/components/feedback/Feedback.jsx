import styles from './feedback.module.css'

const Feedback = ({ state, positive }) => {
    return (
        <ul className={styles.feedbackContainer}>
            <li>Good: {state.good}</li>
            <li>Neutral: {state.neutral}</li>
            <li>Bad: {state.bad}</li>
            <li>Total: {state.good + state.neutral + state.bad}</li>
            <li>Positive: {positive}%</li>
        </ul>
    );
};

export default Feedback;