import React, {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Folder name="Desktop" >
        <Folder name = "Music">
          <File name = "yoyo.mp4"/>
          <File name = "just.mp4"/>
        </Folder>
        <File name="dog.png" />
        <File name="cat.png" />
      </Folder>

      <Folder name="Applications" />
    </div>
  );
}
const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {name,children}=props;
  const direction = isOpen?'down':'right'

  const handleClick = ()=>setIsOpen(!isOpen)

  // console.log(props);
  const borderStyle = { marginLeft: '17px' }
  return (
    <div >
      <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>

      </span>
      {name}
      <div style={borderStyle}>
        {isOpen?children :null}
      </div>
    </div>
  )
}

const File = (props) => {
  const {name}=props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4 : 'headphones',
    png : 'file image',
    jpeg : 'file image outline'
  }
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>

      {name}
    </div>
  )
}

export default App;
