import { FC } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { IQuiz } from '../../interfaces/quiz';

interface IProps {
  formValue: string;
  setFormValue: (state: any) => void;
  question: IQuiz;
}

const RadioButtonsGroup: FC<IProps> = ({ formValue, setFormValue, question: { answers } }) => {
  return (
    <FormControl>
      <RadioGroup
        value={formValue}
        onChange={({ target }) => setFormValue(target.value)}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {answers &&
          answers.map((answer, index) => (
            <FormControlLabel key={`answer-${index}`} value={answer} control={<Radio />} label={answer} />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
