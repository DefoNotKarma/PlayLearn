import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Application() {

  const [Obj, setObj] = useState();

  useEffect(() => {

    axios.get('/api/application')
    .then((response) => {
      setObj(response.data)
    })
    .catch((err) => {
      console.log("error: " ,err);
    })

  }, [])

  return (

    <div>
      <h1>Application goes here</h1>
      {Obj && <p>{Obj.message}</p>}
    </div>
  );
}

export default Application;