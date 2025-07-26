import styles from './feedback.module.css'

const Feedback = ({ state, positive, totalFeedback }) => {
    return (
        <ul className={styles.feedbackContainer}>
            <li>Good: {state.good}</li>
            <li>Neutral: {state.neutral}</li>
            <li>Bad: {state.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positive}%</li>
        </ul>
    );
};

export default Feedback;