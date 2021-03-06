import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import DisplayList from './DisplayList'
import TopAnime from './TopAnime'

class AnimeList extends Component {


    constructor(props) {
        super(props)

        this.state = {
            list: [],
            topList: [],
            search: "naruto"
        }

        this.fetchAnime = this.fetchAnime.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async fetchAnime(event) {
        event.preventDefault()

        let res = ""
        const options = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/search/anime?limit=10&genre=12&genre_exclude=0',
            params: { q: this.state.search },
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

        // this.setState({
        //     pic2: res.results[0].image_url
        // })

        if (res.results !== undefined) {
            let newArray = res.results.slice()

            this.setState({
                list: newArray
            })
        }

        console.log(this.state.list)

    }

    handleChange(event) {

        this.setState({
            search: event.target.value
        })

    }

    // async fetchTopAnime() {

    //     let res = ""
    //     const options = {
    //         method: 'GET',
    //         url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
    //         headers: {
    //             'x-rapidapi-key': 'bbb8bbd286msh51087b0bbfe175fp14ad82jsn950349773c0d',
    //             'x-rapidapi-host': 'jikan1.p.rapidapi.com'
    //         }
    //     };

    //     await axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });


    //     if (res.top !== undefined) {
    //         let newArray = res.top.slice()

    //         this.setState({
    //             topList: newArray
    //         })
    //     }

    // }



    render() {
        return (
            <div>
                <form onSubmit={this.fetchAnime}>
                    <label>Search Anime: </label>
                    <input value={this.state.search} onChange={this.handleChange}></input>
                    <button>Search</button>
                </form>

                <DisplayList list={this.state.list} />
                {/* <TopAnime topList = {this.fetchTopAnime}/>
                <button onClick={this.fetchTopAnime}>top</button> */}
            </div>
        )
    }
}

export default AnimeList;