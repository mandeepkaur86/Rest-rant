const React = require('react')
const Defe = require('./default')

function error404 () {
    return (
      <Defe>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <img width='50%'src='./images/404.jpg' alt='404error' />
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Defe>
    )
  }
  

module.exports = error404
