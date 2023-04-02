import { NextPage } from 'next';

import { useTimer } from 'react-timer-hook';
import { useRouter } from 'next/router';

import * as S from './styles';

const Perdeu: NextPage = () => {
    const router = useRouter();
    const { p } = router.query;

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
            <h3>DERROTA</h3>
            <p>
                Prêmio final:{' '}
                {Number(p) > 0 ? (
                    <>
                        R$ 2<sup>{p}</sup> mil = {2 ** Number(p)} mil
                    </>
                ) : (
                    <>R$ {p}</>
                )}{' '}
            </p>
            <span>voltando ao menu em {seconds || 60} s</span>
        </S.Container>
    );
};

export default Perdeu;
