import React, { useEffect, useState } from 'react';
import { QuestionSet } from 'components/QuestionSet';

import { IQuestion } from 'utils/questions';
import { getRandomQuestion } from 'utils/getRandomQuestion';
import { useMqttState, useSubscription } from 'mqtt-react-hooks';
import { useRouter } from 'next/router';
import { useTimer } from 'react-timer-hook';
import * as S from './styles';

interface GameProps {
    routeName: string;
    timeout: number;
}

const GameTemplate: React.FC<GameProps> = ({ routeName, timeout }) => {
    const router = useRouter();
    const { id, sorted } = router.query;

    const [question, setQuestion] = useState<IQuestion>({} as IQuestion);
    const [sortedIds, setSortedIds] = useState<number[]>([]);
    const { client } = useMqttState();

    const { message: acertou } = useSubscription('acertou');
    const { message: perdeu } = useSubscription('perdeu');
    const { message: ganhou } = useSubscription('ganhou');

    const time = new Date();
    time.setSeconds(time.getSeconds() + timeout);
    const { seconds, restart } = useTimer({
        expiryTimestamp: time,
        onExpire: () => {
            console.log('tempo expirou');
        }
    });

    useEffect(() => {
        if (acertou?.message === '1' && Number(id) < 10) {
            router.push(`/${routeName}/${Number(id) + 1}`);
            const t = new Date();
            t.setSeconds(t.getSeconds() + timeout);
            restart(t);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acertou]);

    useEffect(() => {
        if (sorted) {
            setSortedIds(JSON.parse(atob(String(sorted))));
        }
        const { q, x } = getRandomQuestion(sortedIds);
        setQuestion(q);
        setSortedIds([...sortedIds, x]);

        client?.publish('resposta', q.correctAnswer);
        console.log(`Resposta publicada: ${q.correctAnswer.toUpperCase()}`);
    }, [id]);

    if (perdeu?.message === '1') {
        router.push(`/perdeu?p=${id}`);
    }

    if (ganhou?.message === '1') {
        router.push('/ganhou');
    }

    return (
        <S.Container>
            <h1>SHOW DO 2¹⁰ MIL</h1>
            <S.Content>
                {id && question && (
                    <QuestionSet number={String(id)} q={question} />
                )}
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
};

export default GameTemplate;
