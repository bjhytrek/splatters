import React, { PropTypes } from 'react';
import { AppBar, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import theme from './Layout.scss';
import alertInstance from './alert.js';
import Link from 'react-toolbox/lib/link';

class LayoutInstance extends React.Component {
    state = {
        drawerActive: false,
        drawerPinned: false
    };

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    };

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <p>
                        Navigation, account switcher, etc. go here.
                    </p>
                </NavDrawer>
                <Panel>
                    <AppBar><IconButton  icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/>
                      <h2 title={ true }>Title</h2>
                      <a href="/home">Home</a>
                      <a href="/home">About</a>
                      <a rightIcon={ true } href="/home">Find Us</a>
                    </AppBar>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>

                    </div>
                </Panel>
            </Layout>
        );
    }
}

export default LayoutInstance;
