import Courses from './pages/Courses';
import Header from './components/Header';
import Footer from './components/Footer';


import { createClient } from '@supabase/supabase-js'
import {useEffect} from "react";

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_URL, process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_ANON_KEY)

function App() {
    useEffect(() => {
        async function fetchData () {
            const { data, error } = await supabase
                .from('courses')
                .select()
            return data
        }

        fetchData().then(data => {
            console.log(data)
        })
    }, [])

  return (
    <div>
        <Header />
        <Courses />
        <Footer />
    </div>
  );
}

export default App;
