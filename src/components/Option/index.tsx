import OptionIcon from 'components/OptionIcon';
import * as S from './styles';

export type OptionProps = {
    op: string;
    label: string;
};

const Option: React.FC<OptionProps> = ({ op, label }) => (
    <S.Wrapper>
        <OptionIcon op={op} />
        <S.Label>{label}</S.Label>
    </S.Wrapper>
);

export default Option;
