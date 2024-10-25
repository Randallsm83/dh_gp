import SessionManager from '../components/SessionManager'

export default function Root() {
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
