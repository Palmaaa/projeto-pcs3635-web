import { useMqttState, useSubscription } from 'mqtt-react-hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import HomeTemplate from 'template/Home';

type IMapper = keyof typeof bitsToRoute;

const bitsToRoute = {
    '1000': '/aprendizado/0',
    '0100': '/facil/0',
    '0010': '/normal/0',
    '0001': '/velocidade/0'
};

const Home: NextPage = () => {
    const { push } = useRouter();
    const { connectionStatus } = useMqttState();
    const { message: menu } = useSubscription('menu');

    console.log(connectionStatus);

    if (!menu) {
        return <HomeTemplate />;
    }

    if (
        menu.message &&
        Object.keys(bitsToRoute).includes(menu.message.toString())
    ) {
        push(bitsToRoute[menu.message as IMapper]);
    }

    return null;
};

export default Home;
