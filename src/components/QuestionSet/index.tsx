import Option from 'components/Option';
import { IQuestion } from 'utils/questions';
import * as S from './styles';

interface QuestionSetProps {
    q: IQuestion;
    number: string;
    pressedOptions: string[];
}

export const QuestionSet: React.FC<QuestionSetProps> = ({
    q,
    number,
    pressedOptions
}) => {
    return (
        <>
            {q && q.answers && (
                <S.Wrapper>
                    <S.Text>{Number(number) + 1}</S.Text>
                    <S.Text>{q.question}</S.Text>
                    <Option
                        op="a"
                        label={q.answers.a}
                        pressed={pressedOptions.includes('11')}
                    />
                    <Option
                        op="b"
                        label={q.answers.b}
                        pressed={pressedOptions.includes('10')}
                    />
                    <Option
                        op="c"
                        label={q.answers.c}
                        pressed={pressedOptions.includes('01')}
                    />
                    <Option
                        op="d"
                        label={q.answers.d}
                        pressed={pressedOptions.includes('00')}
                    />
                </S.Wrapper>
            )}
        </>
    );
};
