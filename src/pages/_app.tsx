import AppProvider from 'hooks';
import { Connector } from 'mqtt-react-hooks';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Connector
            brokerUrl="wss://213d99fb7cf84c718cb63bcffcf71c65.s2.eu.hivemq.cloud:8884/mqtt"
            options={{ username: 'grupo1-bancadaA3', password: 'digi#@1A3' }}
        >
            <AppProvider>
                <GlobalStyles />
                <Component {...pageProps} />
            </AppProvider>
        </Connector>
    );
}

export default MyApp;
