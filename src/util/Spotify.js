let accessToken = ''
let expirationTime =''
const clientId = '388aa5c5526c4453b522265d191052ca'
const redirectUri = 'http://localhost:3000/'

Spotify = {

  getAccessToken(){

    if(accessToken !== ''){
        return accessToken

    }
    else{

      return accessToken=window.location.href.match(/access_token=([^&]*)/)
      return expirationTime=window.location.href.match(/expires_in=([^&]*)/)

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      window.location(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`)

    }


  },

  search(term){

    return Spotify.getAccessToken().then(
      () => {

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`
                  , {headers: {Authorization: `Bearer ${accessToken}`}})
                }).then(response => response.json()).then
        (jsonReponse =>{
            if (jsonResponse.tracks)
                                      {
                                        return jsonResponse.tracks.map(
                                          track => {
                                              return {

                                                      id: track.id,
                                                      name: track.name,
                                                      artist: track.artists[0].name,
                                                      album: track.album.name,
                                                      uri: track.uri

                                                      }
                                                    })
                                      }
                      })
              }

      }

export default Spotify
