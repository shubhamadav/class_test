const object = {
    name:'Shubham',
    student:'sharpaner'

}
const object1= {
    name1 : 'sharad',
     student1 : 'HCL'
} 
const stringifiedObject = JSON.stringify(object,object1)
const array = ["Shubham","sharpaner",1,2,"sharad","HCL"];
const stringifiedArray = JSON.stringify(array)
localStorage.setItem('object',stringifiedObject)
localStorage.setItem('array',stringifiedArray)

const objectFromStorge = localStorage.getItem(object,object1)
const arrayFromStorge = localStorage.getItem(array)

const objectParsed = JSON.parse(objectFromStorge)
const arrayParsed = JSON.parse(arrayFromStorge)