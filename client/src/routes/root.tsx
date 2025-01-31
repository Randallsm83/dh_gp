import { useAuth0 } from "@auth0/auth0-react";
import Layout from '../components/Layout';
import SessionManager from '../components/SessionManager';
import Home from '../components/Home';
import Calendar from '../components/Calendar';
import Crafting from '../components/Crafting';
import Deep from '../components/Deep';
import FieldEx from '../components/FieldEx';
import Fights from '../components/Fights';
import Gathering from '../components/Gathering';
import Glamour from '../components/Glamour';
import { Routes, Route } from 'react-router-dom';
import Discord from "../components/Discord";
import Fishing from "../components/Fishing";

export default function Root() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <>
        <div id="title">
          <h1>SUPER DUPER login form</h1>
        </div>
        <div id='login-form'>
          <SessionManager />
        </div>
      </>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/crafting" element={<Crafting />} />
        <Route path="/deep" element={<Deep />} />
        <Route path="/fieldex" element={<FieldEx />} />
        <Route path="/fights" element={<Fights />} />
        <Route path="/gathering" element={<Gathering />} />
        <Route path="/glamour" element={<Glamour />} />
        <Route path="/discord" element={<Discord />}/>
        <Route path="/fishing" element={<Fishing />} />
      </Routes>
    </Layout>
  );
}
