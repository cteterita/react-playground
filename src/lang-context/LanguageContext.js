import React from 'react'

const LanguageContext = React.createContext({
  lang: null,
  setLang: () => {}
})

export default LanguageContext
