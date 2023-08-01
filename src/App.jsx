import { createRoot } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name='Geralt' animal='Dog' breed='Italian Greyhound' />
            <Pet name='Pepper' animal='Bird' breed='Cockatiel' />
            <Pet name='Cat' animal='Zephyr' breed='Russion Blue' />
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
