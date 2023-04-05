import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Stats } from 'types';
import moment from 'moment';
import * as S from './styles';

const Historico: NextPage = () => {
    const [data, setData] = useState<Stats[]>([]);

    useEffect(() => {
        const h: Stats[] = JSON.parse(
            localStorage.getItem('historico') as string
        );

        setData(h ?? []);
    }, []);

    return (
        <S.Container>
            <h1>Fast Trivia</h1>
            <h2>Histórico</h2>
            {data.length > 0 ? (
                <table>
                    <tr>
                        <th>Data/Hora</th>
                        <th>Resultado</th>
                        <th>Modo de jogo</th>
                        <th>Pontos</th>
                        <th>Pergunta errada</th>
                        <th>Tempo de erro</th>
                    </tr>
                    {data.map((a) => (
                        <tr>
                            <td>{moment(a.date).format('DD/MM/YY HH:mm')}</td>
                            <td>{a.result}</td>
                            <td>
                                {a.gameMode.charAt(0).toUpperCase() +
                                    a.gameMode.slice(1)}
                            </td>
                            <td>{a.points}/10</td>
                            <td>{a.questionError}</td>
                            <td>{a.timeError}</td>
                        </tr>
                    ))}
                </table>
            ) : (
                <p>Sem histórico</p>
            )}
            <a href="/">voltar ao menu</a>
        </S.Container>
    );
};

export default Historico;
