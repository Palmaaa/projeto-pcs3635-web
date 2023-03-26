import Option from 'components/Option';
import * as S from './styles';

interface QuestionSetProps {
    question: {
        number: string;
        text: string;
        options: string[];
    };
}

export const QuestionSet: React.FC<QuestionSetProps> = ({ question }) => {
    return (
        <S.Wrapper>
            <S.Text>{question.number}</S.Text>
            <S.Text>{question.text}</S.Text>
            <Option op="a" label={question.options[0]} />
            <Option op="b" label={question.options[1]} />
            <Option op="c" label={question.options[2]} />
            <Option op="d" label={question.options[3]} />
        </S.Wrapper>
    );
};
