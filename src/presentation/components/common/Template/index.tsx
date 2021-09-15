import Header from "../Header"

const Template = ({ children }: any) => {
  return (
    <div>
      <Header />
      {{ ...children }}
    </div>
  )
}

export default Template