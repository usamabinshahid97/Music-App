import { Component } from 'react'
import qs from 'qs'

// Client ID = ffd3de18e6384ac1b9a9a7d49f6fc46b
// Client Secret = 9d0893986d164bb88bb9893097b19eef

import axios from 'axios'

// var request = require('request'); // "Request" library
class Api extends Component {
    getAccessToken = () => {
        var querystring = require('querystring');
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://accounts.spotify.com/api/token"
        axios.post(proxyurl + url,
            querystring.stringify({
                    grant_type: 'client_credentials'
            }), {
                headers: { 
                "Content-Type": "application/x-www-form-urlencoded",
                'crossorigin': true,
                'Access-Control-Allow-Origin': '*'
                },
                auth : {
                username: 'ffd3de18e6384ac1b9a9a7d49f6fc46b',
                password: '9d0893986d164bb88bb9893097b19eef'
            }
            }).then(function(response) {
                console.log(response.data.access_token);
        });
    }
    componentDidMount() {
        const endpoint = "https://api.spotify.com/v1/recommendations";
        const userAccessToken = "BQDe4goZZTGmMtO2KTcuyOSjU3gksOsCwLf6yGI7YHpQTnt7DXRSqysPYTkOsEAThPY4pZKrYbg4bqg6Yvo"
        const params = {
            'seed_artists': '6sFIWsNpZYqfjUpaCgueju',
            'target_danceability': '0.9'
        };
        // const tracks = null
        fetch(`${endpoint}?${qs.stringify(params)}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userAccessToken}`     
            }
          })
          .then(response => response.json())
          .then( tracks  => {
            console.log(tracks);
          }) ;
    }
    render() {
        return (null)
    }
}

export default Api