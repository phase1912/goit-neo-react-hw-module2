import styles from './options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={() => resetFeedback()}>Reset</button>}
        </div>
    );
};

export default Options;