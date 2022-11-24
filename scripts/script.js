function check_height () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_height");
    let cell = document.getElementById("row_height").cells[i];
    if (cell.firstElementChild.innerHTML <= size.value + 4 && cell.firstElementChild.innerHTML >= size.value - 4) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_chest () {  
  for (i = 1; i < 17; i++) {
    let size_in = document.getElementById("size_chestIn");
    let size_out = document.getElementById("size_chestOut");
    let cell = document.getElementById("row_chest").cells[i];
    if (cell.innerHTML == size_in.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_arm () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_arm");
    let cell = document.getElementById("row_arm").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_bicep () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_bicep");
    let cell = document.getElementById("row_bicep").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_forearm () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_forearm");
    let cell = document.getElementById("row_forearm").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_waist () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_waist");
    let cell = document.getElementById("row_waist").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_hips () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_hips");
    let cell = document.getElementById("row_hips").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_innerLeg () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_innerLeg");
    let cell = document.getElementById("row_innerLeg").cells[i];
    if (cell.innerHTML >= Math.ceil(size.value) - 1 && cell.innerHTML <= Math.ceil(size.value) + 2) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_thigh () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_thigh");
    let cell = document.getElementById("row_thigh").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_calf () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_calf");
    let cell = document.getElementById("row_calf").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function check_bodyTrunk () {  
  for (i = 1; i < 17; i++) {
    let size = document.getElementById("size_bodyTrunk");
    let cell = document.getElementById("row_bodyTrunk").cells[i];
    if (cell.innerHTML == size.value) {
      cell.classList.add("has-background-primary");
    } else {
      cell.classList.remove("has-background-primary");
    }
  }
};

function addDummyData () {
  document.getElementById("size_height").value = 176;
  document.getElementById("size_weight").value = 90;
  document.getElementById("size_chestOut").value = 98;
  document.getElementById("size_chestIn").value = 107;
  document.getElementById("size_arm").value = 53;
  document.getElementById("size_bicep").value = 38;
  document.getElementById("size_forearm").value = 32;
  document.getElementById("size_waist").value = 94;
  document.getElementById("size_hips").value = 92;
  document.getElementById("size_innerLeg").value = 77.5;
  document.getElementById("size_thigh").value = 61;
  document.getElementById("size_calf").value = 34; //30.5
  document.getElementById("size_bodyTrunk").value = 175; //176

  check_height ();
  check_chest ();
  check_arm ();
  check_bicep ();
  check_forearm ();
  check_waist ();
  check_hips ();
  check_innerLeg ();
  check_thigh ();
  check_calf ();
  check_bodyTrunk ();
}