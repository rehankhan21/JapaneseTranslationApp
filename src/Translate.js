import React from 'react'
import axios from 'axios'
import { Component } from 'react'
import Favwords from './Favwords'

class Translate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            word: "hello",
            translated: ""
        }
        
        this.fetchTranslation = this.fetchTranslation.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // Deep Translate api
    async fetchTranslation(event) {
        event.preventDefault()
        let res = "";
        const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
            },
            data: { q: this.state.word, source: 'en', target: 'ja' }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            res = response.data.data
            console.log(response.data.data.translations.translatedText)
            // word: response.data.translations.translatedText
        }).catch(function (error) {
            console.error(error);
        });

        this.setState({
            translated: res.translations.translatedText
        })

        let wordList = this.state.list.slice()
        // wordList.push(this.state.word)
        // wordList.push(this.state.translated)
        let prevTrans = {
            word: this.state.word,
            translated: this.state.translated
        }

        wordList.push(prevTrans)

        this.setState({
            list: wordList
        })
    }

    handleChange(event) {

        this.setState({
            word: event.target.value
        })
    }


    render() {

        return(
            <div>
                <form onSubmit={this.fetchTranslation}>
                    <label>Enter Word: </label>
                    <input value={this.state.word} onChange={this.handleChange}></input>
                    <button>Translate</button>
                </form>
                <div>{this.state.word}</div>
                <div>
                    {this.state.translated}
                    <button>Add to fav</button>
                </div>
                <Favwords wordList = {this.state.list}/>
            </div>
        )
    }

}

export default Translate;