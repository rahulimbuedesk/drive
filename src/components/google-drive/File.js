import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function File({ file }) {
  return (
    <a
      href={file.url}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFile} className="mr-2" />
      {file.name}
      <br></br>
     Size : {((file.size)/1024).toFixed(2)} KB 
     <br></br>
     Type : {file.type}
    </a>
  )
}
