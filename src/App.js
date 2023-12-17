import Courses from './pages/Courses';
import Header from './components/Header';
import Footer from './components/Footer';
import { createClient } from '@supabase/supabase-js'
import React from "react";

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_URL, process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_ANON_KEY)

function App() {
  return (
    <div>
        <Header />
        <Courses supabase={supabase} />
        <Footer />
    </div>
  );
}

export default App;
