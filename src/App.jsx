import React, { useEffect } from "react"
import HeaderMenu from "./components/components/HeaderMenu/HeaderMenu"
import FooterMenu from "./components/components/FooterMenu/FooterMenu"
import styles from "./App.module.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { routes } from "./components/Routes/routes"
import { MantineProvider } from '@mantine/core'
import AOS from "aos"
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <div className={styles.app}>
          <HeaderMenu routes={routes} />
          <div className={styles.content}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </div>
          <FooterMenu />
        </div>
      </Router>
    </MantineProvider>
  )
}

export default App
