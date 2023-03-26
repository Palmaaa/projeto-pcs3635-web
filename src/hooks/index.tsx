import { useSubscription } from 'mqtt-react-hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/default.theme';

const AppProvider: React.FC = ({ children }) => {
    const router = useRouter();

    const { message: reiniciar } = useSubscription('reiniciar');

    useEffect(() => {
        if (reiniciar?.message === '1') {
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reiniciar]);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
