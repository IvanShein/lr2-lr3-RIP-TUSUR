class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  _handleServerResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`При обращении к серверу возникла ошибка: ${response.status} ${response.statusText}`)
  };

  getAllFaqs() {
    return fetch(`${this._baseUrl}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(this._handleServerResponse)
  };

  sendNewFaq(faqData) {
    return fetch(`${this._baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: faqData.question,
        answer: faqData.answer,
      })
    })
      .then(this._handleServerResponse)

  };

  updateFaq(faqData) {
    return fetch(`${this._baseUrl}/${faqData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: faqData.question,
        answer: faqData.answer,
      })
    })
      .then(this._handleServerResponse)
  };

  deleteFaq(id) {
    return fetch(`${this._baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(this._handleServerResponse)
  };

//   deleteCard(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`,
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(this._handleServerResponse)

//   };

//   deleteCardLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//       method: 'DELETE',
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`,
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(this._handleServerResponse)
//   };

//   sendCardLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//       method: 'PUT',
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`,
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(this._handleServerResponse)
//   };

//   changeLikeCardStatus(cardId, isLiked) {
//     if (!isLiked) {
//       return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//         method: 'DELETE',
//         headers: {
//           authorization: `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json'
//         },
//       })
//         .then(this._handleServerResponse)
//     } else {
//       return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//         method: 'PUT',
//         headers: {
//           authorization: `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json'
//         },
//       })
//         .then(this._handleServerResponse)
//     }
//   };

}

const api = new Api({
  baseUrl: 'http://127.0.0.1:8000/api/faq',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
