import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">BudgetBox</h1>
              <p className="text-gray-600">Personal Finance Tracker</p>
              <p className="text-sm text-gray-500 mt-2">Day 1: Project Setup Complete ✅</p>
            </div>
          </div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 