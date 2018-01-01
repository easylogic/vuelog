import axios from 'axios'

const isDevelopment = process.env.NODE_ENV !== 'production'

let baseURL = (isDevelopment) ? 'http://127.0.0.1:5000/api/' : '/api/';

let $backend = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})

$backend.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log(error)
    return Promise.reject(error)
  });
 
export default {

  getCurrentLocale() {
    let lang; 
      
    if (window.localStorage && window.localStorage.getItem('damoa.locale')) {
      lang = window.localStorage.getItem('damoa.locale')
    } else if (navigator.languages && navigator.languages.length) {
      lang = navigator.languages[0]
    } else if (navigator.userLanguage) {
      lang = navigator.userLanguage
    } else {
      lang = navigator.language
    }

    if (lang == 'ko-KR' || lang == 'ko') {
      return 'ko-KR';
    }
    
    return lang || 'en-US'
  },

  fetchLocale (callback) {
    callback(this.getCurrentLocale())
  },

  fetchDocument (idOrPath, callback) {
    const doc = {
        id: idOrPath,
        documentType : 'code',
        timestamp : Date.now(), 
        path: idOrPath,
        me: true,
        title: "blabla",
        url : "custom path or auto created path",
        description : "이건 정말 환상적인 거에요. 같이보시죠.", 
        access : 'public',
        externalResources : [
            'Https://ssss.sss.sss' , 
            'Local resource name',  
        ],
        selectResource: '',
        editResources : [],
        resources  : {
            settings : "{json}",
            style : "css",
            note :  "markdown"

        }
        
    }

    callback(doc);
  },

  fetchGeneratedDocument (idOrPath, callback) {
    const html =  `<h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    v
    v
    <h1>generated${idOrPath}</h1><h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>

    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1><h1>generated${idOrPath}</h1>

    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>

    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>

    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>

    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>

    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>

    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    <h1>generated${idOrPath}</h1>
    
    html`

    callback(html);
  },

  fetchDocumentList (search, callback) {
    const documents = [
        { title : '샘플 1' + Date.now(), description : '', id : '1', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 2' + Date.now(), description : '', id : '2', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 3' + Date.now(), description : '', id : '3', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 4' + Date.now(), description : '', id : '4', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 5' + Date.now(), description : '', id : '5', path : '', like : '', thumbnail : '', usid : '' },
        { title : '샘플 6' + Date.now(), description : '', id : '6', path : '', like : '', thumbnail : '', usid : '' },
    ]  

    return callback( Object.assign(search, {hasNext : true, documents }))
  },

  fetchMeetupList (callback) {
    callback([
      {
        image: 'https://secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/455494977.jpeg',
        subject: 'JK Korean Conversational Study 한국어 회화 스터디',
        memberCount: '2772',
        friends: [ 'id', 'id2' ],
        friendCount: 2
      },
      {
        image: 'https://secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/457398558.jpeg',
        subject: 'Seoul Corda Meetup',
        memberCount: 248,
        friends: [ 'id', 'id2' ],
        friendCount: 2
      },
      {
        image: 'https://secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/455494977.jpeg',
        subject: 'Seoul Tech Society',
        memberCount: 2965,
        friends: [ 'id', 'id2', 'id3', 'id4', 'id5' ],
        friendCount: 8
      }
    ])
  }
}
