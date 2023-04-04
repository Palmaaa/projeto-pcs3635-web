import { NextPage } from 'next';

import NoSSR from 'components/NoSSR';
import GameTemplate from 'template/Game';

const Normal: NextPage = () => {
    return (
        <NoSSR>
            <GameTemplate routeName="normal" timeout={20} />
        </NoSSR>
    );
};

export default Normal;
