import React,{useState} from "react"
import { Link } from "react-router-dom"
import { Button, Row, Col, Card, Modal, Form  } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"
import { storage, firestore } from "../../firebase"



export default function Folder({ folder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }
//  console.log(folder);

// function foldersizecalc() {
//   var aux = 0;
//   firestore.collection('files').where("folderId", "==", folder.id).get().then(Files =>{
//     aux += parseInt(Files["size"]) 
//     console.log(Files["size"]);
//   });
//   return aux;
// }
// const [foldersize, setFoldersize] = useState(foldersizecalc);

function Deletefolder(name) {

  firestore.collection('folders').doc(name).delete().then(() => {

    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}

function handleSubmit(e) {
  e.preventDefault()
  console.log(e);

  console.log(name);
  console.log(folder.id);
  firestore.collection('folders').doc(folder.id).update({
    name:name
  });
  console.log(e.target.value);

  setName("")
  closeModal()
}
  return (
    <Row className="ml-2 mr-2">
    <Card className="p-2" style={{ width: '18rem' }}>
    
<Row   style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
  <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
//      variant="outline-dark"
variant="light"
      className="text-truncate w-75"
      as={Link}
    >
      <FontAwesomeIcon icon={faFolder} className="mr-1" />
      {folder.name}
     
    
    </Button>

    </Row>
<Row className="mt-2"  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
<Col lg="3">
{/* {foldersize} */}
<Button  variant="success" onClick={openModal}>


<FontAwesomeIcon icon={faEdit} />

</Button>
<Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Change Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Rename Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    
    

</Col>

<Col lg="3">

<Button  variant="danger" onClick={() => Deletefolder(folder.id)}>


<FontAwesomeIcon icon={faTrash} />

</Button>
    

</Col>
</Row>



   
  
    </Card>
    </Row>
  )
}
