import type { NextPage } from 'next';
import Layout from '../components/layout/layout';
import styles from '../styles/Home.module.css';
import { CONTAINER } from '../utils';

const Home: NextPage = () => {
    return (
        <Layout
            title="Covalence | Home"
            description="Premium, online, software education">
            <section className={CONTAINER}>
                <div className="text-center py-10">
                    <h1 className="text-3xl font-semibold">Hello World!</h1>
                    <h2 className="text-xl text-gray-500 font-medium">
                        {' '}
                        - Raj
                    </h2>
                </div>
                <div className="py-10 text-center">
                    <button onClick={async () => {
                        try {
                            const r = await fetch('/api/hello', {
                                method: 'POST',
                                body: JSON.stringify({
                                    name: 'Johnny Appleseed',
                                    to: ' pretishasahoo@gmail.com',
                                    subject: 'Click ME!!!!',
                                    intro: 'Welcome to Raj!',
                                    content: 'Dekh bhai dekh bhai mone hoye hoegeche at https://rishibhattasali.vercel.app',
                                }),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });

                            const res = await r.json();

                            if (res.success) {
                                alert('Email sent');
                            } 
                        } catch (e) {
                            console.log(e);
                            alert('Email failed');
                        }
                    }}>
                        Send
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
