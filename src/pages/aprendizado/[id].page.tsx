import { NextPage } from 'next';

import GameTemplate from 'template/Game';
import NoSSR from 'components/NoSSR';

const Aprendizado: NextPage = () => {
    return (
        <NoSSR>
            <GameTemplate routeName="aprendizado" timeout={20} />
        </NoSSR>
    );
};

export default Aprendizado;
