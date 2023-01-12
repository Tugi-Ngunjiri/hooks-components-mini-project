import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var SideBar = React.createClass({
    render() {
        return (
            <html>
            <head>
                <title>Football Prototype</title>
            </head>
            <div>
                <header class="navbar navbar-fixed-top navbar-shadow">
                    <div class="navbar-branding">
                        <a class="navbar-brand" href="dashboard">
                            <b>Shire</b>Soldiers
                        </a>
                    </div>
                    <form class="navbar-form navbar-left navbar-search alt" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search..."
                                   value="Search...">Search</input>
                        </div>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown menu-merge">
                            <span class="caret caret-tp hidden-xs"></span>
                        </li>
                    </ul>
                </header>

                <aside id="sidebar_left" class="nano nano-light affix">

                    <div class="sidebar-left-content nano-content">

                        <ul class="nav sidebar-menu">
                            <li class="sidebar-label pt20">Menu</li>
                            <li class="active">
                                <a href="/dashboard">
                                    <span class="glyphicon glyphicon-home"></span>
                                    <span class="sidebar-title">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/fixtures">
                                    <span class="fa fa-calendar"></span>
                                    <span class="sidebar-title">Fixtures</span>
                                </a>
                            </li>
                        </ul>

                    </div>

                </aside>
                <body>
                    <section id="content_wrapper">

                    </section>
                </body>
            </div>
            </html>
        )
    }
});

var destination = document.querySelector("#content_wrapper");

ReactDOM.render(
    <div>
        <SideBar/>
    </div>,
    destination
);