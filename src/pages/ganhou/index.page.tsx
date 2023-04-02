import { NextPage } from 'next';

import { useTimer } from 'react-timer-hook';

import * as S from './styles';

const Ganhou: NextPage = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    const { seconds } = useTimer({
        expiryTimestamp: time,
        onExpire: () => {
            console.log('voltar ao menu');
        }
    });

    return (
        <S.Container>
            <h1>SHOW DO 2¹⁰ MIL</h1>
            <h2>RESUMO DO JOGO</h2>
            <h3>VITÓRIA</h3>
            <p>
                Prêmio final: R$ 2<sup>10</sup> mil = 1.024 mil
            </p>
            <span>voltando ao menu em {seconds} s</span>
        </S.Container>
    );
};

export default Ganhou;
