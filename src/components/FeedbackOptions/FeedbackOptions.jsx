import PropTypes from 'prop-types';

import { UL } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <UL onClick={onLeaveFeedback}>
      {[...options].map(button => (
        <li key={button}>
          <button type="button" name={button}>
            {button}
          </button>
        </li>
      ))}
    </UL>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
