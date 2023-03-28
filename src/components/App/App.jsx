import { useState } from 'react';

import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0)
      return Math.round((good / countTotalFeedback()) * 100, 0);
  };

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(pS => pS + 1);
        break;
      case 'neutral':
        setNeutral(pS => pS + 1);
        break;
      case 'bad':
        setBad(pS => pS + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};
