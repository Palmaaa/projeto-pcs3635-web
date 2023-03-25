import * as S from './styles';

export type OptionIconProps = {
    op: string;
};

const OptionIcon: React.FC<OptionIconProps> = ({ op }) => (
    <S.Wrapper>
        <p>{op}</p>
    </S.Wrapper>
);

export default OptionIcon;
