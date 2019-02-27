/ for (var i = 5; i >= 1; i--) {
    //     var starHomework = [];
    //     for (var a = i; a <= 5; a++) {
    //         starHomework += "    *";
    //     }
    //     console.log(starHomework);
    // }
    // homework starHomework
    // for (let i = 0; i <= 4; i++) {
    //     let storage = "";
    //     for (let x = 4; x >= 0; x--) {
    //         if (x - i <= 0) {
    //             storage += "*";
    //         } else {
    //             storage += " ";
    //         }
    //     }
    //     console.log(storage);
    // }
    // next star one
    
    for (let i = 0; i <= 4; i++) {
       let storage = "";
       for (let x = 4; x >= 0; x--) {
           if (x - i <= 0) {
               storage += "*";
           } else {
               storage += " ";
           }
       }
       console.log(storage);
    }