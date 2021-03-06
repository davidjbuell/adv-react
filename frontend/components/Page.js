import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
    red: "#FF0000",
    black: "#393939",
    grey: "#3A3A3A",
    lightgrey: "#E1E1E1",
    offWhite: "#EDEDED",
    maxWidth: "1000px",
    boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
    bpXL: "1300px",
};

const StyledPage = styled.div`
    background: white;
    color: ${theme.black};
`;

const Content = styled.div`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'radnika_next';
        font-size: 1.5rem;
        line-height: 2;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

export default class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Content>{this.props.children}</Content>
                </StyledPage>
            </ThemeProvider>
        );
    }
}
