import '../../styles/homePage.css'
import React, {Component} from "react";
import {Redirect} from "react-router-dom";

export class HomePageTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            jump: false,
            search: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        let params = this.state.userInput.split('/');
        let owner = params[0];
        let repoName = params[1];
        if(repoName){
            this.setState({jump:true})
        }else{
            this.setState({search:true})
        }
    }

    render() {
        if(this.state.jump){
            return <Redirect to={`/${this.state.userInput}`}/>
        }
        return (
            <div id="search">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="search"
                        autoFocus={true}
                        name='userInput'
                        value={this.state.userInput}
                        onChange={this.onChange}
                        placeholder="type keyword(s) here"/>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}