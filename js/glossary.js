const div = document.querySelector('#glossaryDiv');

function getJSON() { 
  fetch('https://api.npoint.io/fa5a5627060b024e30f1')
    .then(response => response.json())
    .then(data => genGlossary(data.glossary))
    .catch(error => console.log('Looks like there was a problem', error));
      // function to generate glossary definitions fron Json 
   }
      getJSON();

  function genGlossary(data) {
      const addDeffs = document.createElement('div');
         addDeffs.innerHTML   = `
            
            <ul class= "letterA">
            <h6>A:</h6>
               <li>${data.def0}</li><li>${data.def1}</li><li>${data.def2}</li>
               <li>${data.def3}</li><li>${data.def4}</li><li>${data.def5}</li>
               <li>${data.def6}</li><li>${data.def7}</li><li>${data.def8}</li>
               <li>${data.def8}</li><li>${data.def9}</li><li>${data.def10}</li>
               <li>${data.def11}</li><li>${data.def12}</li><li>${data.def13}</li>
               <li>${data.def14}</li><li>${data.def15}</li>
            </ul><br> 

            <ul class= "letterB">
            <h6>B:</h6>
               <li>${data.def16}</li><li>${data.def17}</li><li>${data.def18}</li>
               <li>${data.def19}</li><li>${data.def20}</li><li>${data.def21}</li>
            </ul><br> 

            <ul class= "letterC">
            <h6>C:</h6>
               <li>${data.def22}</li><li>${data.def23}</li><li>${data.def24}</li>
            </ul><br>

            <ul class= "letterD">
            <h6>D:</h6>
               <li>${data.def25}</li><li>${data.def26}</li> <li>${data.def27}</li>
               <li>${data.def28}</li><li>${data.def29}</li>
            </ul><br>

            <ul class= "letterE">   
            <h6>E:</h6>
               <li>${data.def30}</li><li>${data.def31}</li><li>${data.def32}</li>
               <li>${data.def33}</li><li>${data.def34}</li>
            </ul><br>

            <ul class= "letterF">
            <h6>F:</h6>
               <li>${data.def35}</li><li>${data.def36}</li> <li>${data.def37}</li>
               <li>${data.def38}</li> <li>${data.def39}</li><li>${data.def40}</li>
            </ul><br>

            <ul class= "letterG">
            <h6>G:</h6>
               <li>${data.def41}</li><li>${data.def42}</li><li>${data.def43}</li>
               <li>${data.def44}</li><li>${data.def45}</li><li>${data.def46}</li>
            </ul><br>

            <ul class= "letterH"> 
            <h6>H:</h6>
               <li>${data.def47}</li><li>${data.def48}</li><li>${data.def49}</li>
               <li>${data.def50}</li><li>${data.def51}</li><li>${data.def52}</li>
            </ul><br>

            <ul class= "letterI">
            <h6>I:</h6>
               <li>${data.def53}</li><li>${data.def54}</li><li>${data.def55}</li>
               <li>${data.def56}</li><li>${data.def57}</li>
            </ul><br>

            <ul class= "letterK">
            <h6>K:</h6>
               <li>${data.def58}</li>
            </ul><br>

            <ul class= "letterL">
            <h6>L:</h6>
               <li>${data.def59}</li><li>${data.def60}</li><li>${data.def61}</li>
               <li>${data.def62}</li><li>${data.def63}</li><li>${data.def64}</li>
               <li>${data.def65}</li>
            </ul><br>

            <ul class= "letterM">
            <h6>M:</h6>
               <li>${data.def66}</li><li>${data.def67}</li><li>${data.def68}</li>
               <li>${data.def69}</li><li>${data.def70}</li> <li>${data.def71}</li>
               <li>${data.def72}</li>
            </ul><br>

            <ul class= "letterP">
            <h6>P:</h6>
               <li>${data.def73}</li><li>${data.def74}</li><li>${data.def75}</li>
               <li>${data.def76}</li><li>${data.def77}</li><li>${data.def78}</li>
               <li>${data.def79}</li><li>${data.def80}</li><li>${data.def81}</li>
               <li>${data.def82}</li><br>
            </ul><br>

            <ul class= "letterR">
            <h6>R:</h6>
               <li>${data.def83}</li>
            </ul><br>

            <ul class= "letterS">
            <h6>S:</h6>
               <li>${data.def84}</li><li>${data.def85}</li><li>${data.def86}</li>
               <li>${data.def87}</li><li>${data.def88}</li><li>${data.def89}</li>
               <li>${data.def90}</li>
            </ul><br>

            <ul class= "letterT">
            <h6>T:</h6>
               <li>${data.def91}</li><li>${data.def92}</li>
            </ul><br>

            <ul class= "letterW"> 
            <h6>W:</h6>
               <li>${data.def93}</li>
            </ul><br>

            <ul class= "letterZ">
            <h6>Z:</h6>
               <li>${data.def94}</li><br>
            </ul><br> 
               <a href="glossary.html"><button class= "randomBtn" type="button">[BACK TO TOP] </button></a>
            </ul>
         `;
          div.appendChild(addDeffs);  
     
  }



  



      
   


