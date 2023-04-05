import { NextPage } from 'next';

import { useTimer } from 'react-timer-hook';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { Stats } from 'types';
import * as S from './styles';

const Perdeu: NextPage = () => {
    const router = useRouter();
    const { p, data } = router.query;

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

        const { gameMode, timeError, questionError } = JSON.parse(
            atob(data as string)
        );

        stats = [
            {
                date: new Date(),
                points: p as string,
                result: 'Derrota',
                questionError,
                timeError,
                gameMode
            },
            ...stats
        ];

        localStorage.setItem('historico', JSON.stringify(stats));
    }, []);

    return (
        <S.Container>
            <h1>Fast Trivia</h1>
            <h2>RESUMO DO JOGO</h2>
            <h3>DERROTA</h3>
            <p>Pontos: {p}/10</p>
            <span>voltando ao menu em {seconds ?? 60} s</span>
        </S.Container>
    );
};

export default Perdeu;
