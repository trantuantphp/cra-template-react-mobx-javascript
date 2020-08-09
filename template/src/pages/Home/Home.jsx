import React from 'react';
import { inject, observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './Home.scss';

const Home = inject('HomeStore')(
    observer((props) => {
        const { t } = useTranslation();
        console.log(props);
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>{t('home.hello_world')}</p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    })
);

export default Home;
