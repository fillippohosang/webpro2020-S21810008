/*
Object
*/

//const student1 = ["Sana", "Dubu", 20, true];

//deklarasi object liberals
const student1 = {
    fname : "Sana",
    lname : "Minatosaki",
    umur : 20,
    lulus : false,
    alamat : {
        jalan : "Jln geng tokyo",
        kecamatan : "hiragana",
        kabupaten : "Katana",
    },
    IPS : [3.70,3.66,3.88,3.99],
    calIPK : function () {
        let total = 0;
        this.IPS.forEach(function(el) {
            total = total + el;
        }); 
   this.IPK=total/4;
    },
};

//kata kunci new
//const student2 = new Object();
//student2.fname = "Momo";
//student2.lname = "Hirai";

//akses properti objek
//1.dot
//console.log(student2.fname)
//bracket notation
//console.log(student1["fname"]);

calIPK.student1();
console.log(student1);

//Array Object 
