import React from 'react';
import PropTypes from "prop-types";
import './AppLayout.css';

export default function AppLayout({ header, main, footer }) {
    return (
        <div className='app-layout'>
            <header>
                { header }
            </header>
            <main>
                { main }
            </main>
            <footer>
                { footer }
            </footer>
        </div>
    )
}

AppLayout.propTypes = {
    header: PropTypes.node,
    main: PropTypes.node.isRequired,
    footer: PropTypes.node
}