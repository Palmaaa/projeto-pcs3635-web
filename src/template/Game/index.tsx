import React from 'react';
import { QuestionSet } from 'components/QuestionSet';

import { questions } from 'utils/questions';

import * as S from './styles';

interface GameProps {
    id: string;
    seconds: number;
}

const GameTemplate: React.FC<GameProps> = ({ id, seconds }) => (
    <S.Container>
        <h1>SHOW DO 2¹⁰ MIL</h1>
        <S.Content>
            {id && <QuestionSet number={id} question={questions[Number(id)]} />}
            <S.Side>
                <p>
                    Prêmio atual: R${' '}
                    {Number(id) > 0 ? (
                        <>
                            2<sup>{id}</sup> mil
                        </>
                    ) : (
                        id
                    )}
                </p>
                <p>Tempo: {seconds} s</p>
            </S.Side>
        </S.Content>
    </S.Container>
);

export default GameTemplate;
