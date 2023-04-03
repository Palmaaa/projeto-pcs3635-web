import { NextPage } from 'next';

import GameTemplate from 'template/Game';
import NoSSR from 'components/NoSSR';

const Velocidade: NextPage = () => {
    return (
        <NoSSR>
            <GameTemplate routeName="velocidade" timeout={10} />
        </NoSSR>
    );
};

export default Velocidade;
