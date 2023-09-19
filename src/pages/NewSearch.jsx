import React, { useState } from "react"

export const NewSearch = () => {
  const [newWord, setNewWord] = useState("")

  return (
    <div>
      <input value={newWord} onChange={(e) => setNewWord(e.target.value)} />
    </div>
  )
}
