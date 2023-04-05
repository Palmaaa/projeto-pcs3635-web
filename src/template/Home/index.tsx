import Option from 'components/Option';

import * as S from './styles';

const HomeTemplate = () => (
    <S.Container>
        <S.Title>Fast Trivia</S.Title>
        <S.ModesTitle>MODOS DE JOGO</S.ModesTitle>
        <S.OptionsWrapper>
            <Option op="a" label="aprendizado" menu />
            <Option op="b" label="fácil" menu />
            <Option op="c" label="normal" menu />
            <Option op="d" label="velocidade" menu />
        </S.OptionsWrapper>
        <S.Stats href="/historico">histórico</S.Stats>
    </S.Container>
);

export default HomeTemplate;
