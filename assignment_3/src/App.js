import React from 'react'

  const StudentsList = [
    {id: 1, name: 'Julia'},
    {id: 2, name: 'Selena'},
    {id: 3, name: 'Christian'},
  ];
function Student(){
  return (
    <>
      <ul>
        {StudentsList.map((Student) => <Student key={StudentsList.id} name={StudentsList.name} />)}
      </ul>
    </>
  );
}


export default Student;


