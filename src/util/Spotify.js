let accessToken = ''
let expiresIn =''
let userId=''
const clientId = '388aa5c5526c4453b522265d191052ca'
const redirectUri = "http://localhost:3000/"

const Spotify = {

  getAccessToken() {
       if(accessToken) {
           return accessToken;
       }

       const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
       const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

       if (accessTokenMatch) {
           accessToken = accessTokenMatch[1];
           expiresIn = Number(expiresInMatch[1]);
           window.setTimeout(() => accessToken = '', expiresIn * 1000);
           window.history.pushState('Access Token', null, '/');
           return accessToken;
       } else {
           const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
           window.location = accessUrl;
       }
   },

  search(term){

    const accessToken=Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`
                  , {headers: {Authorization: `Bearer ${accessToken}`}})
                .then(response => { return response.json()})
                .then(jsonResponse => {
                  if (!jsonResponse.tracks){
                    return [];
                  } else {
                    return jsonResponse.tracks.items.map(track => {
                      return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri


                      }

                    });

                  }

                });

              },


getUserId(){
  const accessToken=Spotify.getAccessToken();

  return fetch('https://api.spotify.com/v1/me', {headers: {Authorization: `Bearer ${accessToken}`}})
  .then(response => { return response.json()})
  .then (jsonResponse => {
    if (jsonResponse.id){
      let userId=jsonResponse.id
      return userId
    }
  })

},

savePlaylist(playlistName,trackURIs){

// savePlaylist(playlistName,trackURIs){
  const accessToken=Spotify.getAccessToken();
  let userId = Spotify.getUserId()
  console.log(userId)
  // let headers = {headers: {Authorization: `Bearer ${accessToken}`}, method: 'POST', body: {name: playlistName}}
  // .then(return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, headers))
  // console.log(userId)

}
}


export default Spotify
