import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Redux extends Component {

    constructor(props) {
        super(props)

        this.state = {

            animeList: [
                {
                    value: ""
                }
            ],

            word: "naruto",
            pic: "https://cdn.myanimelist.net/images/anime/7/3791.jpg",
            pic2: 0,
            translate: "cherry"
        }

        this.fetchData = this.fetchData.bind(this)
        this.fetchAnime = this.fetchAnime.bind(this)
    }

    // async fetchData() {

    //     const res = await fetch("https://kiara-translate.p.rapidapi.com/get_translated/", {
    //         "method": "POST",
    //         "headers": {
    //             "content-type": "application/json",
    //             "x-rapidapi-key": "bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d",
    //             "x-rapidapi-host": "kiara-translate.p.rapidapi.com"
    //         },
    //         "body": {
    //             "input": "World",
    //             "lang": "ja"
    //         }
    //     })
    //         .then(response => {
    //             console.log(response);

    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });

    //     const data = await res.json();
    //     console.log(data)
    // }

    // Deep Translate api
    async fetchData() {
        let res = "";
        const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
            },
            data: { q: this.state.translate, source: 'en', target: 'ja' }
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
            word: res.translations.translatedText
        })
    }

    // Jikan api Axios
    // async fetchAnime() {
    //     let res = ""
    //     const options = {
    //         method: 'GET',
    //         url: 'https://jikan1.p.rapidapi.com/anime/1/',
    //         headers: {
    //           'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
    //           'x-rapidapi-host': 'jikan1.p.rapidapi.com'
    //         }
    //       };

    //       await axios.request(options).then(function (response) {
    //           console.log(response.data);
    //           console.log(response.data.pictures[0].small)
    //           res = response.data.pictures[0].small
    //       }).catch(function (error) {
    //           console.error(error);
    //       });

    //       this.setState({
    //           pic2: res
    //       })

    //       console.log(res)
    // }

    async fetchAnime() {
        let res = ""
        const options = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/search/anime?limit=5',
            params: { q: this.state.word },
            headers: {
                'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
                'x-rapidapi-host': 'jikan1.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            res = response.data
        }).catch(function (error) {
            console.error(error);
        });

       if(res.results[0].image_url !== false) {
            this.setState({
                pic2: res.results[0].image_url
            })
        }
    }


    render() {
        return (
            <div>
                Translate
                {/* {JSON.stringfy(this.props.arr)} */}
                {console.log(this.props.arr)}
                {console.log(this.props.id)}
                <button onClick={this.fetchData}>translate</button>
                <div>
                    {this.state.translate}
                </div>
                <div>
                    {this.state.word}
                </div>
                <button onClick={this.fetchAnime}>
                    get anime
               </button>
                <img src={this.state.pic2 ? this.state.pic2: "no picture"} alt="not found"></img>
            </div>
        )
    }
}

// the state arugment is the global state from the reducer
const mapStateToProps = state => {
    // we have to return an object
    // this is basically creating a prop and setting its value equal to whatever data
    // we want from the global state
    return {
        arr: state.arr,
        id: state.arr[0].id

    }
}

// connect fucntion returns a higher order compoenent
// connedted our compoenent to the redux store
export default connect(mapStateToProps)(Redux)