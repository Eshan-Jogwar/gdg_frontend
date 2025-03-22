import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from './components/button';
import { InputBox } from './components/searchbox';
import HomePageNew from './components/homePageNew';
import LectureSuggester from './components/lectureSuggester';
import WorkSheetWindow from './WorksheetMaker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageNew />} />
        <Route path="/search" element={<Search />} />
        <Route path="/LectureSuggester" element={<LectureSuggester />} />
        <Route path="/WorkSheet" element={<WorkSheetWindow />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("Search button clicked, query:", query);
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-6'>
      <div className='flex flex-col items-center space-y-6 bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg'>
        <h1 className='text-3xl font-bold text-gray-800'>AI-Powered Search</h1>
        <p className='text-gray-500 text-center'>Ask anything and get intelligent answers powered by Gemini AI.</p>
        <InputBox 
          type="text" 
          placeholder="Ask a question..." 
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          onClick={Search} 
          className="w-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg p-3 text-lg shadow-md font-semibold"
        >
          Search
        </button>
      </div>
    </div>
  );
}

function Search(query) {
  fetch("http://127.0.0.1:5000/api/videoId?q=hello").then(elem => {
    elem.json().then(elem => console.log(elem))
  })
}

function Seardfch() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;
    
    const fetchGeminiResponse = async () => {
      try {
        console.log("Starting API fetch for query:", query);
        setLoading(true);
        
        // Initialize the API
        const apiKey = "";
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        console.log("Sending request to Gemini API");
        // Generate content
        const result = await model.generateContent(query);
        const response = await result.response;
        const text = response.text();
        
        console.log("Received response from Gemini API");
        setResponse(text);
      } catch (error) {
        console.error("Detailed error:", error);
        setError("Failed to get a response from the AI. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGeminiResponse();
  }, [query]);

  const handleNewSearch = () => {
    navigate('/');
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 to-blue-700 p-6'>
      <div className='bg-white p-6 rounded-3xl shadow-2xl w-full max-w-2xl'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold text-gray-800'>Results for "{query}"</h2>
          <Button 
            text="New Search" 
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-md text-sm" 
            onClick={handleNewSearch}
          />
        </div>
        
        {loading ? (
          <div className='flex flex-col items-center py-8'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4'></div>
            <p className='text-gray-600'>Getting your answer...</p>
          </div>
        ) : error ? (
          <div className='bg-red-50 p-4 rounded-lg border border-red-200 text-red-700'>
            {error}
          </div>
        ) : (
          <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 whitespace-pre-wrap'>
            {response}
          </div>
        )}
        
        <div className='mt-6 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm'>
          <p>Powered by Gemini AI</p>
        </div>
      </div>
    </div>
  );
}

export default App;