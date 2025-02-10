import React, { useState } from "react";
import "./Parent.css";

import { useNavigate } from "react-router-dom";


const Parent = () => {

const[childflag,setchildflag]=useState([])

  const navigate=  useNavigate()

  const userdata = [
    {
      id: 1,
      parent: {
        id: 101,
        name: "John Doe",
        mobile: "+1234567890",
        image: "https://example.com/john.jpg",
        childs: [
          {
            id: 201,
            name: "Johnny Doe",
            parentname: "John Doe",
            age: 12,
            school: "Greenwood High School",
          },
          {
            id: 202,
            name: "Jenny Doe",
            parentname: "John Doe",
            age: 10,
            school: "Greenwood High School",
          },
        ],
      },
    },
    {
      id: 2,
      parent: {
        id: 102,
        name: "Alice Smith",
        mobile: "+1987654321",
        image: "https://example.com/alice.jpg",
        childs: [
          {
            id: 203,
            name: "Ally Smith",
            parentname: "Alice Smith",
            age: 10,
            school: "Sunshine Academy",
          },
        ],
      },
    },
    {
      id: 3,
      parent: {
        id: 103,
        name: "Robert Brown",
        mobile: "+1122334455",
        image: "https://example.com/robert.jpg",
        childs: [
          {
            id: 204,
            name: "Bobby Brown",
            parentname: "Robert Brown",
            age: 14,
            school: "Maple Leaf School",
          },
          {
            id: 205,
            name: "Bella Brown",
            parentname: "Robert Brown",
            age: 11,
            school: "Maple Leaf School",
          },
          {
            id: 206,
            name: "Ben Brown",
            parentname: "Robert Brown",
            age: 9,
            school: "Maple Leaf School",
          },
        ],
      },
    },
    {
      id: 4,
      parent: {
        id: 104,
        name: "Emily Clark",
        mobile: "+1029384756",
        image: "https://example.com/emily.jpg",
        childs: [
          {
            id: 207,
            name: "Em Clark",
            parentname: "Emily Clark",
            age: 11,
            school: "Ocean View School",
          },
        ],
      },
    },
    {
      id: 5,
      parent: {
        id: 105,
        name: "Michael Johnson",
        mobile: "+1098765432",
        image: "https://example.com/michael.jpg",
        childs: [
          {
            id: 208,
            name: "Mike Johnson",
            parentname: "Michael Johnson",
            age: 13,
            school: "Hilltop Academy",
          },
        ],
      },
    },
  ];

  function getchild(pdata){
     
    navigate("/child", {state: { parentData: pdata } })
   
} 
  

  return (
    <div className="container">
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>mobile</th>
            <th>image</th>
            <th>chilld</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((data, key) => (
            <tr key={data.id}>
              <td>{data.parent.id}</td>
              <td>{data.parent.name}</td>
              <td>{data.parent.mobile}</td>
              <td>{data.parent.image}</td>
              <td>
                <button onClick={()=>getchild(data.parent)}>Get child</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
     
    </div>
  );
};

export default Parent;
