interface Props {
  data: Object | Object[]
  errorTitle: string
  children: React.ReactNode
}

export function List ({ data, errorTitle, children }: Props) {
  if (!data || data <= 0) {
    return (
      <div className='flex justify-between items-center border border-white'>
        <h2>{errorTitle}</h2>
      </div>
    )
  }

  return (
    <div className='border border-white'>
      {children}
    </div>
  )
}
