import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };
  const onLeaveFeedback = item => {
    switch (item) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        window.alert('There is no option');
    }
  };
  let total = good + neutral + bad;

  let positivePersentage = Math.round((good * 100) / total);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(options)}
        onLeaveFeedback={onLeaveFeedback}
      />

      <Statistics
        statistics={options}
        total={total}
        positivePercentage={positivePersentage}
      />
    </Section>
  );
}
