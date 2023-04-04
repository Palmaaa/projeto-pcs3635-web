import Option from 'components/Option';
import { IQuestion } from 'utils/questions';
import * as S from './styles';

interface QuestionSetProps {
    q: IQuestion;
    number: string;
}

export const QuestionSet: React.FC<QuestionSetProps> = ({ q, number }) => {
    console.log(q);
    return (
        <>
            {q && q.answers && (
                <S.Wrapper>
                    <S.Text>{number}</S.Text>
                    <S.Text>{q.question}</S.Text>
                    <Option op="a" label={q.answers.a} />
                    <Option op="b" label={q.answers.b} />
                    <Option op="c" label={q.answers.c} />
                    <Option op="d" label={q.answers.d} />
                </S.Wrapper>
            )}
        </>
    );
};
