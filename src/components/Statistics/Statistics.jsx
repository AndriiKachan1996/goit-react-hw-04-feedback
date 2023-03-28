import PropTypes from 'prop-types';
import { UL, LI } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <UL>
      <LI>
        <span>Good:</span>
        {good}
      </LI>
      <LI>
        <span>Neutral:</span>
        {neutral}
      </LI>
      <LI>
        <span>Bad:</span>
        {bad}
      </LI>
      <LI>
        <span>Total:</span>
        {total}
      </LI>
      <LI>
        <span>PositivePercentage:</span>
        {positivePercentage}%
      </LI>
    </UL>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
