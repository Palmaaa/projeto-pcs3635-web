import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSubscription } from 'mqtt-react-hooks';
import { useTimer } from 'react-timer-hook';

import { QuestionSet } from 'components/QuestionSet';

import { questions } from 'utils/questions';

import { useEffect } from 'react';

import * as S from './styles';

const Normal: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { message: acertou } = useSubscription('acertou');
    const { message: perdeu } = useSubscription('perdeu');
    const { message: ganhou } = useSubscription('ganhou');

    const time = new Date();
    time.setSeconds(time.getSeconds() + 20);
    const { seconds, restart } = useTimer({
        expiryTimestamp: time,
        onExpire: () => {
            console.log('tempo expirou');
        }
    });

    useEffect(() => {
        if (acertou?.message === '1' && Number(id) < 9) {
            router.push(`/normal/${Number(id) + 1}`);
            const t = new Date();
            t.setSeconds(t.getSeconds() + 20);
            restart(t);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acertou]);

    if (perdeu?.message === '1') {
        router.push('/perdeu');
    }

    if (ganhou?.message === '1') {
        router.push('/ganhou');
    }

    return (
        <S.Container>
            <h1>SHOW DO 2¹⁰ MIL</h1>
            <S.Content>
                {id && <QuestionSet question={questions[Number(id)]} />}
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

export default Normal;
