import React from 'react'

export default function Task12() {
    const [input, setInput]  = React.useState("")
    const [output, setOutput] = React.useState({})
  const handleClick = async() => {
    const response = await fetch('https://api.api-ninjas.com/v1/whois?domain=' + input,{  
    method: 'GET',
    headers: { 'X-Api-Key': 'f16/ZeTrWsmT5S/l1LfuyA==bof5onJNqdV8qkMN'},
    contentType: 'application/json',
    })
    if (!response.ok){
      throw new Error(response.statusText)
    }
    const data = await response.json()
    setOutput(data)
    console.log(data)
  }



  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter a domain'/>
      <button onClick={handleClick}>Search</button>
      <div>
        domain name: {output.domain_name} <br />
        registrar: {output.registrar} <br />
        server: {output.whois_server} <br />
        last update on: {output.updated_date} <br />
        Expiry on: {output.expiration_date}
      </div>
    </div>
  )
}
