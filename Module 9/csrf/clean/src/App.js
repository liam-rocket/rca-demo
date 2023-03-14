function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Change your password!</h1>
        <form action="/change-password" method="post">
          <input
            type="password"
            name="current_password"
            placeholder="Current password"
          />
          <input
            type="password"
            name="new_password"
            placeholder="New password"
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm new password"
          />
          <button type="submit">Change Password</button>
        </form>
      </header>
    </div>
  );
}

export default App;
