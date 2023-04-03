import { NextPage } from 'next';

import GameTemplate from 'template/Game';
import NoSSR from 'components/NoSSR';

const Normal: NextPage = () => {
    return (
        <NoSSR>
            <GameTemplate routeName="normal" timeout={20} />
        </NoSSR>
    );
};

export default Normal;
