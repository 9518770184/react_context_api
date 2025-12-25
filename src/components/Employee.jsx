import React from 'react'

export function Employee() {
  const multiDimentionalArray = [
    { name: 'Vijay', last: 'Shinde', age: 20 },
    { name: 'Vaibhav', last: 'Shinde', age: 19 },
    { name: 'Rushikesh', last: 'Yashlote', age: 20 },
    { name: 'Yuvraj', last: 'Jadhav', age: 20 },
  ];
  return (
    <>
      {multiDimentionalArray?.map((ele) =>
        <div>
          <span>First Name : {ele?.name}</span>
          <span>Last Name  : {ele?.last}</span>
          <span>Age        : {ele?.age}</span>
        </div>
      )}
    </>
  )
}