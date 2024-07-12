let API_url = 'https://api.nasa.gov/planetary/apod?api_key='
let API_key = 'Q5LZpb8nLBbxU6Amf3HnKf1Moa5QPXFiYYFRj5Dd'


document.querySelector('#searchbtn').addEventListener('click', ()=>{
    event.preventDefault();
    dateselected = document.querySelector('#datepicker').value
    console.log(dateselected)

    async function Collectdata(){
        try {
         const final_url = API_url + API_key + `&date=${dateselected}`
         let res = await fetch (final_url, {
             method:'GET'
         })
         if(!res.ok){
            alert('Date entered might be out of range.')
         }
         else if(res.ok){
         let data = await res.json();
         console.log(data)
         updateimage = document.querySelector('.reqimg')
         updateimage.src = `${data.url}`
         document.querySelector('.currentdate').innerHTML = `Date: ${data.date}`
         document.querySelector('.description').innerHTML = `<h3>Description:</h3>${data.explanation}`
         document.querySelector('.title').innerHTML = `<h3>Title:</h3> ${data.title}`
         }
     }
    
     
         catch (error) {
         console.log(error)
        }
    }

     Collectdata()

})



