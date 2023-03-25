import { useMqttState, useSubscription } from 'mqtt-react-hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import HomeTemplate from 'template/Home';

const bitsToRoute = {
    '1000': '/aprendizado',
    '0100': '/facil',
    '0010': '/normal',
    '0001': '/velocidade'
};

const Home: NextPage = () => {
    const { push } = useRouter();
    const { connectionStatus } = useMqttState();
    const { message: menu } = useSubscription('/menu');

    console.log(connectionStatus);

    if (!menu) {
        return <HomeTemplate />;
    }

    if (
        menu.message &&
        Object.keys(bitsToRoute).includes(menu.message.toString())
    ) {
        push(bitsToRoute[menu.message as keyof typeof bitsToRoute]);
    }

    return null;
};

export default Home;
