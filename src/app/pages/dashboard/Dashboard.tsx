import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 0,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 100,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 200,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 100,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 300,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 0,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 1000,
        pv: 4300,
        amt: 2100,
    },
];

const TesteGrafico = () => {
    return <LineChart width={750} height={500} data={data} >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
}


const NavBar = () => {
    return <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-text-top"
                />
                Teste de componetes
            </a>
        </div>

    </nav>
};

const Conteudo = () => {
    return <div className="container-fluid">
        <main>
        <TesteGrafico />
        </main>
    </div>
};

const Footer = () => {
    return <footer className="text-center bg-body-tertiary">
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
            © 2020 Copyright:
            <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>

    </footer>
};

export const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <Conteudo />
            <Footer />
        </div>
    );
}