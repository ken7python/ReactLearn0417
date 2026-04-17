import './App.css'

// function ProfileCard() {
//   return (
//     <div>
//       <h2>About KenCode</h2>
//       <p>高校生エンジニア</p>
//     </div>
//   )
// }

function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}

function App() {
  const name = "KenCode"
  return (
    <div>
      <h1>こんにちは, {name}!</h1>
      <p>Reactの練習中です</p>

      <h1>自己紹介</h1>
      <ProfileCard name="KenCode" job="高校生エンジニア" />
      <ProfileCard name="テストくん" job="Webデザイナー" />
    </div>
  )
}

export default App
