import OptionIcon from 'components/OptionIcon';

import * as S from './styles';

export type OptionProps = {
    op: string;
    label: string;
    menu?: boolean;
    pressed?: boolean;
};

const Option: React.FC<OptionProps> = ({ op, label, menu, pressed }) => (
    <S.Wrapper menu={menu}>
        <OptionIcon op={op} pressed={pressed} />
        <S.Label menu={menu}>{label}</S.Label>
    </S.Wrapper>
);

export default Option;
