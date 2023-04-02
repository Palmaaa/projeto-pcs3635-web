import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSubscription } from 'mqtt-react-hooks';
import { useTimer } from 'react-timer-hook';

import NoSSR from 'components/NoSSR';
import GameTemplate from 'template/Game';

const Normal: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { message: acertou } = useSubscription('acertou');
    const { message: perdeu } = useSubscription('perdeu');
    const { message: ganhou } = useSubscription('ganhou');

    const time = new Date();
    time.setSeconds(time.getSeconds() + 20);
    const { seconds, restart } = useTimer({
        expiryTimestamp: time,
        onExpire: () => {
            console.log('tempo expirou');
        }
    });

    useEffect(() => {
        if (acertou?.message === '1' && Number(id) < 9) {
            router.push(`/normal/${Number(id) + 1}`);
            const t = new Date();
            t.setSeconds(t.getSeconds() + 20);
            restart(t);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acertou]);

    if (perdeu?.message === '1') {
        router.push(`/perdeu?p=${id}`);
    }

    if (ganhou?.message === '1') {
        router.push('/ganhou');
    }

    return (
        <NoSSR>
            <GameTemplate id={String(id)} seconds={seconds} />
        </NoSSR>
    );
};

export default Normal;
