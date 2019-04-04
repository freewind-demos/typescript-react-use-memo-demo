import React, {useState, useMemo} from 'react'

export default function Hello() {
  const [willUseMemo, setWillUseMemo] = useState(true)
  const [count, setCount] = useState(0)

  function slowMessage() {
    const start = Date.now()
    while (Date.now() - start < 1000) {
    }
    return 'computed message ' + Date.now();
  }

  const memoHello = useMemo(() => {
    return slowMessage()
  }, [])

  return <div>
    <h1>Hello useMemo</h1>
    <div>
      <label><input type='checkbox' checked={willUseMemo}
                    onChange={event => setWillUseMemo(event.currentTarget.checked)}/>useMemo</label>
    </div>
    <div>
      {willUseMemo ? memoHello : slowMessage()}
      <button onClick={() => setCount(pre => pre + 1)}>Increase {count}</button>
    </div>
  </div>
};
