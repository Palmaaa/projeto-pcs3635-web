import Option from 'components/Option';
import * as S from './styles';

interface QuestionSetProps {
    question: {
        text: string;
        options: string[];
    };
    number: string;
}

export const QuestionSet: React.FC<QuestionSetProps> = ({
    question,
    number
}) => {
    return (
        <S.Wrapper>
            <S.Text>{number}</S.Text>
            <S.Text>{question.text}</S.Text>
            <Option op="a" label={question.options[0]} />
            <Option op="b" label={question.options[1]} />
            <Option op="c" label={question.options[2]} />
            <Option op="d" label={question.options[3]} />
        </S.Wrapper>
    );
};
