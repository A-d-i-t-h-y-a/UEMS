// const refreshment = ()=>{
//     const content = document.querySelector(".Book")
//     content.innerHTML = `<div class="row my-3">
//     <h3 class="col-4">Menu (<button class="btn col-4 fs-6 text-primary" onclick="func()">Select All</button>)</h3>
//   </div>
//   <div class="ms-5 px-4 shadow bg-body rounded w-75 mh-50">
//     <div class="row my-4 justify-content-evenly">
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="Samosa" style="width: 16px;">
//         <label class="form-check-label" for="Samosa">
//           Samosa
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="Frooti" style="width: 16px;">
//         <label class="form-check-label" for="Frooti">
//           Frooti
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//     </div>
//     <div class="row my-4 justify-content-evenly">
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//     </div>
//     <div class="row my-4 justify-content-evenly">
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//     </div>
//     <div class="row my-4 justify-content-evenly">
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//     </div>
//     <div class="row my-4 justify-content-evenly">
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class="col-3 form-check">
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 16px;">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//     </div>
//   </div>
//   <div class="row input-group my-5">
//     <span class="col-2">Quantity :</span>
//     <input type="text" class="col-2 form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon1">
//   </div>
//   <div class="row input-group ">
//     <span class="col-2">Description :</span>
//     <textarea class="form-control col-8" aria-label="With textarea"></textarea>
//   </div>
//   <div class="my-3" style="text-align: center">
//     <button class="btn btn-primary" type="submit" onclick="book()">Previous</button>
//     <button class="btn btn-primary">Next</button>
//   </div>`;
// }

// const book = ()=>{
//   const content = document.querySelector(".Book")
//   content.innerHTML = `<ul>
//   <li>
//     <div class="row input-group mb-5">
//       <span class="me-5 col-2">Event Name :</span>
//       <input type="text" class="form-control col-8" placeholder="Event Name" aria-label="Event name" aria-describedby="basic-addon1">
//     </div>
//   </li>
//   <li>
//     <div class="row input-group mb-5">
//       <span class="me-5 col-2">Description :</span>
//       <textarea class="form-control col-8" aria-label="With textarea"></textarea>
//     </div>
//   </li>
//   <li>
//     <div class="row input-group mb-5">
//       <label class="me-5 col-2">Event Type :</label>
//       <select class="form-select col-8" id="inputGroupSelect01">
//         <option selected>Offline</option>
//         <option value="1">Online</option>
//       </select>
//     </div>
//   </li>
//   <li class="mb-5">
//       <div class="row input-group mb-5">
//         <span class="me-5 col-2">Date :</span>
//         <input type="date" class="form-control">
//         <span class="me-5 col-2">Date :</span>
//         <input type="time" class="form-control">
//       </div>
//   </li>
//   <li>
//     <div class="row input-group mb-5">
//       <label class="me-5 col-2">Venue :</label>
//       <select class="form-select col-8" id="inputGroupSelect01">
//         <option selected>Auditorium</option>
//         <option value="1">Mini Auditorium<  /option>
//       </select>
//     </div>
//   </li>
//   <li style="text-align: center;">
//     <button class="btn btn-primary" onclick="refreshment()">Next</button>          
//   </li>
// </ul>`
// }

// let check = document.getElementsByClassName("form-check-input")
// for(let i of check){
  //     i.setAttributeNode("checked","");
  // }
  
nextBtn = document.querySelectorAll(".btn-next");
prevBtn = document.querySelectorAll(".btn-prev");
formStep = document.querySelectorAll(".step");
Bookbtn = document.getElementById("Bookbtn");

let temp = 0;

nextBtn.forEach(element => {
  // console.log(element)
  element.addEventListener("click", ()=>{
    // temp++;
    nextstep();
  })
});

prevBtn.forEach(element => {
  // console.log(element)
  element.addEventListener("click", ()=>{
    // temp--;
    prevstep();
  })
});

const nextstep = ()=>{
  // formStep.forEach((formstep)=>{
    //   formstep.classList.contains("act")&&
  //   formstep.classList.remove("act")
  // })
  // formStep[temp].classList.add("act");
  let a = 0;
  for(a = 0;a<3;a++){
    if(formStep[a].classList.contains("act")){
      break;
    }
  }
  formStep[a].classList.remove("act");
  a++;
  formStep[a].classList.add("act");
}

const prevstep = ()=>{
  // formStep.forEach((formstep)=>{
  //   formstep.classList.contains("act")&&
  //   formstep.classList.remove("act")
  // })
  // formStep[temp].classList.add("act");
  let a = 0;
  for(a = 0;a<3;a++){
    if(formStep[a].classList.contains("act")){
      break;
    }
  }
  formStep[a].classList.remove("act");
  a--;
  formStep[a].classList.add("act");
}

const leftnav = (e)=>{
  for(let i of formStep){
    if(i.id == e && i.classList.contains("act")){
      break;
    }
    if(i.id == e && !(i.classList.contains("act"))){
      i.classList.add("act");
    }
    else{
      i.classList.remove("act");
    }
  }
}

