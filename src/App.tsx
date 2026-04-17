import { Routes, Route, Link} from "react-router-dom"
import HOME from "./pages/HOME"
import ToDo from "./pages/ToDo"

export default function App() {
  return (
    <>
      {/* ナビゲーション */}
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/todo">ToDo</Link>
      </nav>

      {/* ルート定義 */}
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  )
}