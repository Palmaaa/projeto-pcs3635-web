import * as S from './styles';

export type OptionIconProps = {
    op: string;
    pressed?: boolean;
};

const OptionIcon: React.FC<OptionIconProps> = ({ op, pressed }) => (
    <S.Wrapper pressed={pressed}>
        <p>{op}</p>
    </S.Wrapper>
);

export default OptionIcon;
