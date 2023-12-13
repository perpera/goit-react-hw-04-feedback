import { Button } from 'components/Feedback/Feedback';
import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(name => {
        return (
          <FeedbackBtn key={name}>
            <Button value={name} onUpdate={() => onLeaveFeedback(name)} />
          </FeedbackBtn>
        );
      })}
    </div>
  );
};
