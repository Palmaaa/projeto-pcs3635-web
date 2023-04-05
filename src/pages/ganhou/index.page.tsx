import { NextPage } from 'next';

import { useTimer } from 'react-timer-hook';

import { useEffect } from 'react';
import { Stats } from 'types';
import { useRouter } from 'next/router';

import * as S from './styles';

const Ganhou: NextPage = () => {
    const router = useRouter();
    const { mode } = router.query;

    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    const { seconds } = useTimer({
        expiryTimestamp: time,
        onExpire: () => {
            console.log('voltar ao menu');
        }
    });

    useEffect(() => {
        let stats: Stats[] = [];
        const current = localStorage.getItem('historico');

        if (current) {
            stats = JSON.parse(current);
        }

        stats = [
            {
                date: new Date(),
                points: '10',
                result: 'Vitória',
                questionError: '-',
                timeError: '-',
                gameMode: mode as string
            },
            ...stats
        ];

        localStorage.setItem('historico', JSON.stringify(stats));
    }, []);

    return (
        <S.Container>
            <h1>Fast Trivia</h1>
            <h2>RESUMO DO JOGO</h2>
            <h3>VITÓRIA</h3>
            <p>Pontos: 10/10</p>
            <span>voltando ao menu em {seconds ?? 60} s</span>
        </S.Container>
    );
};

export default Ganhou;
