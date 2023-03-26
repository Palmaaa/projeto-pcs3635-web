import OptionIcon from 'components/OptionIcon';

import * as S from './styles';

export type OptionProps = {
    op: string;
    label: string;
    menu?: boolean;
};

const Option: React.FC<OptionProps> = ({ op, label, menu }) => (
    <S.Wrapper menu={menu}>
        <OptionIcon op={op} />
        <S.Label menu={menu}>{label}</S.Label>
    </S.Wrapper>
);

export default Option;
