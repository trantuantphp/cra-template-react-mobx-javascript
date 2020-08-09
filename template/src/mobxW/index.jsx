import React from 'react';
import { configure } from 'mobx';
import 'mobx-react-lite/batchingForReactDom';
import { Provider } from 'mobx-react';
import stores from './stores';

configure({
    enforceActions: 'always',
});

const MobxWrapper = (props) => (
    <Provider {...stores}>{props.children}</Provider>
);

export default MobxWrapper;
