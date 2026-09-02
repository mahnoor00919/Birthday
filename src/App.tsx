import './App.css'

function App() {
  return (
    <main className="app-shell">
      <h1 className="sr-only">Happy Birthday, Fatima</h1>
      <iframe
        src="/experience.html"
        title="Happy Birthday interactive cake experience"
        className="app-frame"
        allow="autoplay; microphone"
      />
    </main>
  )
}

export default App