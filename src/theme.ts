// theme.js

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig} from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
//   useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config,
color:{
     red:{
        50:'#ffe2ec',
        100:"#ffb3c5",
        200:'#fc839f',
        300:'#f95278',
        400:"#f62252"
     }
}

 })

export default theme