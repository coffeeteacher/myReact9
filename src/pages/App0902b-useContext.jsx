import React, { useContext, useState } from 'react'

const App = () => {
  // 建立一個空的共用區(可以跨元件使用)
  const Context = React.createContext({});
  // 建立按鈕控制變數
  const [signedIn, setSignedIn] = useState(false)
  // 建立使用者變數
  const [userName, setUserName] = useState('demo');


  // 建立一個Nav元件
  const Nav = () => {
    return (
      <div className="nav">
        {/* 按鈕 */}
        <Btn />
      </div>
    )
  }

  // 建立按鈕
  const Btn = () => {
    // 取出共用區的signedIn變數與setSignedIn方法
    const [signedIn, setSignedIn, userName, setUserName] = useContext(Context);
    return (
      <>
        <button onClick={() => setSignedIn(!signedIn)}>
          {/* 登出 */}
          {signedIn ? '登出' : '登入'}
        </button>
      </>
    )
  }

  // 登入元件
  const LoginForm = () => {
    return (
      <>
        帳號<input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </>
    )
  }
  return (
    <div>
      <h1>useContext-跨元件使用變數與函式</h1>
      <hr />
      <Context.Provider value={[signedIn, setSignedIn, userName, setUserName]}>
        <Nav />

        {
          signedIn
            ? null
            : <LoginForm />
        }

        {/* <h2>Singed Out</h2> */}

        <h2>
          <small>{signedIn ? userName : '未登入'}-</small>
          {signedIn ? "Signed In" : "Singed Out"}
        </h2>

      </Context.Provider>
    </div>
  )
}

export default App