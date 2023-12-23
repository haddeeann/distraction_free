import React from 'react';
import Courses from './Courses';
import { createClient } from '@supabase/supabase-js';
// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_URL, process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_ANON_KEY);


const Home = () => {
    return (
        <div>
            Home
            <Courses supabase={supabase} />
        </div>
    );
}

export default Home;



