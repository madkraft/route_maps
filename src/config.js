const config = {
  'localhost': {
    // authUrl: 'https://hubtags-learn.herokuapp.com/authenticate',
    // clientId: '13ce25598a0e19261ce5'
  },

  'routemap.surge.sh': {
    // authUrl: '',
    // clientId: ''
  }
}[window.location.hostname]

export default config
