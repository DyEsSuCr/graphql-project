import { Button } from 'antd'

export function List ({ data, errorTitle, btnMessaje, setToggle, children }) {
  if (!data || data <= 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'solid white 1px' }}>
        <h2>{errorTitle}</h2>
        <Button type='primary' onClick={() => setToggle(true)}>{btnMessaje}</Button>
      </div>
    )
  }

  return (
    <div style={{ border: 'solid 1px white' }}>
      {children}
    </div>
  )
}
